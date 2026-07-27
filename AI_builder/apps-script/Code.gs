/**
 * SIMplicity Inquiry backend.
 *
 * DEPLOY CHECKLIST (one-time, ~10 min):
 * 1. Create a new Google Sheet, name a tab "Inquiries" (or change SHEET_NAME below).
 * 2. In that Sheet: Extensions > Apps Script. Delete the default code, paste this whole file.
 * 3. Set TO_EMAIL below to the inbox that should receive inquiry notifications.
 * 4. Run doPost once manually (or run checkInquiries) to trigger the Google auth prompt;
 *    approve Gmail + Sheets access.
 * 5. Deploy > New deployment > type "Web app" > Execute as "Me" > Who has access "Anyone".
 *    Copy the Web App URL it gives you.
 * 6. Paste that URL into WEBAPP_URL in simplicity-inquiry.html (replacing the REPLACE_ placeholder).
 * 7. Triggers (clock icon, left sidebar) > Add Trigger > function: checkInquiries,
 *    event source: Time-driven, type: Minutes timer, every minute.
 */

const TO_EMAIL = 'REPLACE_WITH_YOUR_EMAIL';
const SHEET_NAME = 'Inquiries';
const PROCESSED_LABEL = 'SIMplicity/Processed';
const NEEDS_REVIEW_LABEL = 'SIMplicity/NeedsReview';
const SUBJECT_PREFIX = 'New SIMplicity Inquiry';

// Field label -> whether it's always required. "Board Type" is conditionally
// required (only when Hardware On Hand is "yes"), handled separately below.
const FIELD_LABELS = [
  'Requester Name',
  'Requester Email',
  'Instrument Make',
  'Instrument Model',
  'Protocol',
  'Hardware On Hand',
  'Board Type',
  'Needed By',
  'Notes',
];
const ALWAYS_REQUIRED = [
  'Requester Name', 'Requester Email', 'Instrument Make',
  'Instrument Model', 'Protocol', 'Hardware On Hand', 'Needed By',
];

/** Receives the form POST from simplicity-inquiry.html and emails TO_EMAIL. */
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const id = data.id || 'UNKNOWN';

  const lines = [
    `Requester Name: ${data.requesterName || ''}`,
    `Requester Email: ${data.requesterEmail || ''}`,
    `Instrument Make: ${data.instrumentMake || ''}`,
    `Instrument Model: ${data.instrumentModel || ''}`,
    `Protocol: ${data.protocol || ''}`,
    `Hardware On Hand: ${data.hardwareOnHand || ''}`,
    `Board Type: ${data.boardType || ''}`,
    `Needed By: ${data.neededBy || ''}`,
    `Notes: ${data.notes || ''}`,
  ];

  GmailApp.sendEmail(TO_EMAIL, `${SUBJECT_PREFIX} #${id}`, lines.join('\n'));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, id }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Time-driven trigger: parses unprocessed inquiry emails, logs to the Sheet, replies. */
function checkInquiries() {
  const processedLabel = getOrCreateLabel(PROCESSED_LABEL);
  const needsReviewLabel = getOrCreateLabel(NEEDS_REVIEW_LABEL);
  const sheet = getSheet();

  const threads = GmailApp.search(`is:unread subject:"${SUBJECT_PREFIX}"`);
  threads.forEach(thread => {
    thread.getMessages().forEach(message => {
      if (!message.isUnread()) return;

      const subject = message.getSubject();
      const idMatch = subject.match(/#(\S+)/);
      const id = idMatch ? idMatch[1] : 'UNKNOWN';
      const fields = parseBody(message.getPlainBody());
      const missing = findMissing(fields);
      const status = missing.length === 0 ? 'Logged' : 'Needs Review';

      appendRow(sheet, id, fields, status, missing);
      sendReply(fields, id, missing);

      message.markRead();
      thread.addLabel(missing.length === 0 ? processedLabel : needsReviewLabel);
    });
  });
}

function parseBody(body) {
  const fields = {};
  FIELD_LABELS.forEach(label => (fields[label] = ''));
  body.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (!match) return;
    const label = match[1].trim();
    if (FIELD_LABELS.includes(label)) fields[label] = match[2].trim();
  });
  return fields;
}

function findMissing(fields) {
  const missing = ALWAYS_REQUIRED.filter(label => !fields[label]);
  if (fields['Hardware On Hand'].toLowerCase() === 'yes' && !fields['Board Type']) {
    missing.push('Board Type');
  }
  if (fields['Requester Email'] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields['Requester Email'])) {
    missing.push('Requester Email (invalid format)');
  }
  return missing;
}

function appendRow(sheet, id, fields, status, missing) {
  sheet.appendRow([
    id,
    new Date(),
    fields['Requester Name'],
    fields['Requester Email'],
    fields['Instrument Make'],
    fields['Instrument Model'],
    fields['Protocol'],
    fields['Hardware On Hand'],
    fields['Board Type'],
    fields['Needed By'],
    fields['Notes'],
    status,
    missing.join('; '),
  ]);
}

function sendReply(fields, id, missing) {
  const requesterEmail = fields['Requester Email'];
  const validRequesterEmail = requesterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(requesterEmail);

  if (missing.length === 0) {
    const body = [
      `Got it — your SIMplicity inquiry #${id} is logged.`,
      '',
      `${fields['Instrument Make']} ${fields['Instrument Model']} over ${fields['Protocol']}, needed by ${fields['Needed By']}.`,
      "I'll follow up with the firmware load directly.",
    ].join('\n');
    GmailApp.sendEmail(validRequesterEmail ? requesterEmail : TO_EMAIL, `Re: ${SUBJECT_PREFIX} #${id}`, body);
    return;
  }

  const body = [
    `Your SIMplicity inquiry #${id} is missing some information:`,
    '',
    ...missing.map(m => `- ${m}`),
    '',
    'Reply to this email with those details, or resubmit the form.',
  ].join('\n');

  // If the requester's own email wasn't captured or is malformed, there's no
  // one to reply to — flag it to TO_EMAIL instead of guessing.
  GmailApp.sendEmail(validRequesterEmail ? requesterEmail : TO_EMAIL, `Re: ${SUBJECT_PREFIX} #${id}`, body);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'ID', 'Timestamp', 'Requester Name', 'Requester Email', 'Instrument Make',
      'Instrument Model', 'Protocol', 'Hardware On Hand', 'Board Type',
      'Needed By', 'Notes', 'Status', 'Missing Fields',
    ]);
  }
  return sheet;
}

function getOrCreateLabel(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

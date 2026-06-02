'use strict';

const escapeHtml = (unsafe) =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const newlinesToParagraphs = (input) => {
  if (typeof input !== 'string') return input;

  // If the editor already produced HTML, keep it as-is.
  if (/<[a-z][\s\S]*>/i.test(input)) return input;

  const normalized = input.replace(/\r\n/g, '\n').trim();
  if (!normalized) return input;

  const lines = normalized
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return input;

  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join('\n');
};

module.exports = {
  async beforeCreate(event) {
    if (event?.params?.data?.contentHtml) {
      event.params.data.contentHtml = newlinesToParagraphs(event.params.data.contentHtml);
    }
  },
  async beforeUpdate(event) {
    if (event?.params?.data?.contentHtml) {
      event.params.data.contentHtml = newlinesToParagraphs(event.params.data.contentHtml);
    }
  },
};


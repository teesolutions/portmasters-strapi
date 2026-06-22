'use strict';

const LOCALES = [
  { name: 'English (en)', code: 'en', isDefault: true },
  { name: 'Arabic (ar)', code: 'ar' },
  { name: 'Dutch (nl)', code: 'nl' },
  { name: 'German (de)', code: 'de' },
];

async function ensureLocales(strapi) {
  const localesService = strapi.plugin('i18n').service('locales');

  for (const locale of LOCALES) {
    const existing = await localesService.findByCode(locale.code);

    if (!existing) {
      await localesService.create(locale);
      strapi.log.info(`Locale created: ${locale.code}`);
    }
  }

  await localesService.setDefaultLocale({ code: 'en' });
}

module.exports = { ensureLocales };

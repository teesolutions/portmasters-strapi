'use strict';

const { ensureLocales } = require('./bootstrap/locales');
const { ensurePublicPermissions } = require('./bootstrap/permissions');
const { seedLandingContent } = require('./bootstrap/seed-landing-content');

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    await ensureLocales(strapi);
    await ensurePublicPermissions(strapi);
    await seedLandingContent(strapi);
  },
};

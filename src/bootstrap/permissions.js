'use strict';

const ACTIONS_TO_ENABLE = [
  'api::post.post.find',
  'api::post.post.findOne',
  'api::category.category.find',
  'api::category.category.findOne',
  'api::tag.tag.find',
  'api::tag.tag.findOne',
  'api::social-media.social-media.find',
  'api::social-media.social-media.findOne',
  'api::landing-page.landing-page.find',
  'api::landing-page.landing-page.findOne',
  'api::faq-item.faq-item.find',
  'api::faq-item.faq-item.findOne',
  'api::pricing-plan.pricing-plan.find',
  'api::pricing-plan.pricing-plan.findOne',
];

async function ensurePublicPermissions(strapi) {
  const role = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!role) {
    return;
  }

  for (const action of ACTIONS_TO_ENABLE) {
    const existingPermission = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({
        where: {
          action,
          role: role.id,
        },
      });

    if (existingPermission) {
      if (!existingPermission.enabled) {
        await strapi.db.query('plugin::users-permissions.permission').update({
          where: { id: existingPermission.id },
          data: { enabled: true },
        });
      }
    } else {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action,
          role: role.id,
          enabled: true,
        },
      });
    }
  }
}

module.exports = { ensurePublicPermissions };

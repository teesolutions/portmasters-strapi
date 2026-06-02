'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const role = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!role) {
      return;
    }

    const actionsToEnable = [
      'api::post.post.find',
      'api::post.post.findOne',
      'api::category.category.find',
      'api::category.category.findOne',
      'api::tag.tag.find',
      'api::tag.tag.findOne',
      'api::social-media.social-media.find',
      'api::social-media.social-media.findOne',
    ];

    for (const action of actionsToEnable) {
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
  },
};

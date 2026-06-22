'use strict';

const { landingPages, faqItems, pricingPlans } = require('../data/landing-seed');

const LOCALE = 'en';

async function landingPageExists(strapi, slug) {
  const existing = await strapi.documents('api::landing-page.landing-page').findMany({
    locale: LOCALE,
    filters: { slug: { $eq: slug } },
    limit: 1,
  });

  return existing.length > 0;
}

async function faqItemExists(strapi, sortOrder) {
  const existing = await strapi.documents('api::faq-item.faq-item').findMany({
    locale: LOCALE,
    filters: { sortOrder: { $eq: sortOrder } },
    limit: 1,
  });

  return existing.length > 0;
}

async function pricingPlanExists(strapi, planKey) {
  const existing = await strapi.documents('api::pricing-plan.pricing-plan').findMany({
    locale: LOCALE,
    filters: { planKey: { $eq: planKey } },
    limit: 1,
  });

  return existing.length > 0;
}

async function seedLandingContent(strapi) {
  for (const page of landingPages) {
    if (await landingPageExists(strapi, page.slug)) {
      strapi.log.info(`Landing page already exists: ${page.slug}`);
      continue;
    }

    await strapi.documents('api::landing-page.landing-page').create({
      locale: LOCALE,
      status: 'published',
      data: page,
    });

    strapi.log.info(`Landing page seeded: ${page.slug}`);
  }

  for (const item of faqItems) {
    if (await faqItemExists(strapi, item.sortOrder)) {
      strapi.log.info(`FAQ item already exists: sortOrder ${item.sortOrder}`);
      continue;
    }

    await strapi.documents('api::faq-item.faq-item').create({
      locale: LOCALE,
      status: 'published',
      data: item,
    });

    strapi.log.info(`FAQ item seeded: sortOrder ${item.sortOrder}`);
  }

  for (const plan of pricingPlans) {
    if (await pricingPlanExists(strapi, plan.planKey)) {
      strapi.log.info(`Pricing plan already exists: ${plan.planKey}`);
      continue;
    }

    await strapi.documents('api::pricing-plan.pricing-plan').create({
      locale: LOCALE,
      status: 'published',
      data: plan,
    });

    strapi.log.info(`Pricing plan seeded: ${plan.planKey}`);
  }
}

module.exports = { seedLandingContent };

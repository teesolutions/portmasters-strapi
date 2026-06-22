'use strict';

function parseBulletList(content) {
  return content
    .split(/<br\s*\/?>/i)
    .map((item) => item.replace(/^\s*•\s*/, '').trim())
    .filter(Boolean)
    .map((text) => ({ text }));
}

function buildSection({ sortOrder, sectionKey, heading, contentType, content }) {
  if (contentType === 'paragraph') {
    return {
      sortOrder,
      sectionKey,
      heading,
      contentType,
      paragraph: `<p>${content}</p>`,
    };
  }

  return {
    sortOrder,
    sectionKey,
    heading,
    contentType,
    bulletItems: parseBulletList(content),
  };
}

function parseFeatures(featuresString) {
  return featuresString
    .split('·')
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({ text }));
}

const privacyPolicySections = [
  buildSection({
    sortOrder: 0,
    sectionKey: 'introduction',
    heading: 'Introduction',
    contentType: 'paragraph',
    content:
      'At Portmasters, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share information about you when you interact with our platform.',
  }),
  buildSection({
    sortOrder: 1,
    sectionKey: 'user-information-we-collect',
    heading: 'Information We Collect',
    contentType: 'bullet_list',
    content:
      '• Personal Information: When you create an account, book a shipment, or contact support, we may collect information such as your name, email address, phone number, and payment details.<br>• Cargo and Shipment Details: To process your shipments, we collect relevant data such as cargo weight, dimensions, origin, and destination.<br>• Technical Information: We may collect data about your device and interaction with our site, including IP address, browser type, and cookie data.',
  }),
  buildSection({
    sortOrder: 2,
    sectionKey: 'how-we-use-your-information',
    heading: 'How We Use Your Information',
    contentType: 'bullet_list',
    content:
      '• Service Provision: To create and manage your account, process shipments, and ensure smooth service delivery<br>• Communication: To provide updates, send confirmations, answer inquiries, and notify you of any changes or updates to our services.<br>• Improvement and Personalization: To improve website functionality, optimize user experience, and provide relevant content and offers.<br>• Security and Compliance: To protect against fraud, manage risk, and comply with legal obligations.',
  }),
  buildSection({
    sortOrder: 3,
    sectionKey: 'sharing-of-information',
    heading: 'Sharing of Information',
    contentType: 'bullet_list',
    content:
      '• With Service Providers: We may share your information with trusted partners, such as shipping carriers and payment processors, to fulfill your service requests<br>• With Third-Party Services: For analytics, advertising, or legal compliance, we may share limited information with authorized third-party platforms in line with this policy.<br>• Legal Requirements: If required by law or to protect the rights, property, or safety of Portmasters and its users, we may disclose your information to comply with legal obligations.',
  }),
  buildSection({
    sortOrder: 4,
    sectionKey: 'cookies-and-tracking-technologies',
    heading: 'Cookies and Tracking Technologies',
    contentType: 'paragraph',
    content:
      'Portmasters uses cookies and similar technologies to recognize you, improve your user experience, and analyze website traffic. You can manage your cookie preferences in your browser settings.',
  }),
  buildSection({
    sortOrder: 5,
    sectionKey: 'data-security',
    heading: 'Data Security',
    contentType: 'paragraph',
    content:
      'We implement industry-standard security measures to protect your information. While we strive to protect all data, no security system is completely secure; users should also take steps to safeguard their accounts.',
  }),
  buildSection({
    sortOrder: 6,
    sectionKey: 'data-retention',
    heading: 'Data Retention',
    contentType: 'paragraph',
    content:
      'We retain your information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, or as otherwise stated to you at the time of collection.',
  }),
  buildSection({
    sortOrder: 7,
    sectionKey: 'your-privacy-rights',
    heading: 'Your Privacy Rights',
    contentType: 'paragraph',
    content:
      'Depending on your location, you may have rights to access, correct, delete, or limit the use of your data. To exercise these rights, please contact us at support@portmasters.com.',
  }),
  buildSection({
    sortOrder: 8,
    sectionKey: 'changes-to-this-policy',
    heading: 'Changes to This Policy',
    contentType: 'paragraph',
    content:
      'Portmasters may update this Privacy Policy periodically to reflect changes in practices or legal requirements. We will notify you of significant changes and update the policy on our site.',
  }),
  buildSection({
    sortOrder: 9,
    sectionKey: 'contact-information',
    heading: 'Contact Information',
    contentType: 'paragraph',
    content:
      'For questions or concerns regarding these Terms and Conditions, contact us at support@portmasters.com.',
  }),
];

const termsSections = [
  buildSection({
    sortOrder: 0,
    sectionKey: 'introduction',
    heading: 'Introduction',
    contentType: 'paragraph',
    content:
      'At Portmasters, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share information about you when you interact with our platform.',
  }),
  buildSection({
    sortOrder: 1,
    sectionKey: 'service-scope',
    heading: 'Service Scope',
    contentType: 'paragraph',
    content:
      'Portmasters offers a platform to compare, book, and manage shipping services across various providers. We are not the direct providers of transportation but serve as an intermediary to connect users with verified carriers.',
  }),
  buildSection({
    sortOrder: 2,
    sectionKey: 'account-registration',
    heading: 'Account Registration',
    contentType: 'paragraph',
    content:
      'Users must register and create an account to book shipments. You agree to provide accurate and current information and to update any changes to maintain account accuracy.',
  }),
  buildSection({
    sortOrder: 3,
    sectionKey: 'booking-terms',
    heading: 'Booking Terms',
    contentType: 'bullet_list',
    content:
      '• Users are responsible for entering correct information regarding the origin, destination, cargo type, weight, and dimensions. Portmasters is not responsible for any discrepancies arising from incorrect information provided by the user.<br>• Upon booking, users will receive a confirmation email and tracking details.',
  }),
  buildSection({
    sortOrder: 4,
    sectionKey: 'payment-terms',
    heading: 'Payment Terms',
    contentType: 'paragraph',
    content:
      'All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping).',
  }),
  buildSection({
    sortOrder: 5,
    sectionKey: 'cargo-and-liability',
    heading: 'Cargo and Liability',
    contentType: 'bullet_list',
    content:
      '• Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement.',
  }),
  buildSection({
    sortOrder: 6,
    sectionKey: 'cancellation-and-refunds',
    heading: 'Cancellation and Refunds',
    contentType: 'bullet_list',
    content:
      '• Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement.',
  }),
  buildSection({
    sortOrder: 7,
    sectionKey: 'data-protection-and-privacy',
    heading: 'Data Protection and Privacy',
    contentType: 'paragraph',
    content:
      'All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping).',
  }),
  buildSection({
    sortOrder: 8,
    sectionKey: 'user-responsibilities',
    heading: 'User Responsibilities',
    contentType: 'paragraph',
    content:
      'Users agree to refrain from any misuse of the platform, including providing false information, attempting to disrupt service, or infringing on the rights of others.',
  }),
  buildSection({
    sortOrder: 9,
    sectionKey: 'dispute-resolution',
    heading: 'Dispute Resolution',
    contentType: 'paragraph',
    content:
      "Any disputes arising out of or related to the use of Portmasters' services will be handled through binding arbitration in accordance with local laws.",
  }),
  buildSection({
    sortOrder: 10,
    sectionKey: 'changes-to-terms',
    heading: 'Changes to Terms',
    contentType: 'paragraph',
    content:
      'Portmasters reserves the right to modify or update these Terms and Conditions. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of these adjustments.',
  }),
  buildSection({
    sortOrder: 11,
    sectionKey: 'contact-information',
    heading: 'Contact Information',
    contentType: 'paragraph',
    content:
      'For questions or concerns regarding these Terms and Conditions, contact us at support@portmasters.com.',
  }),
];

const bookDemoSliderBlocks = [
  {
    sortOrder: 0,
    blockKey: 'comprehensiveDashboard',
    title: 'Comprehensive Dashboard',
    description:
      'Get a complete overview of all your logistics operations in one place. Monitor active bookings, track shipments, and access key metrics instantly.',
  },
  {
    sortOrder: 1,
    blockKey: 'advancedManifestManagement',
    title: 'Advanced Manifest Management',
    description:
      'Create and manage shipping manifests with ease. Our intuitive interface allows you to track every detail of your shipments in real-time.',
  },
  {
    sortOrder: 2,
    blockKey: 'smartWorkspace',
    title: 'Smart Workspace',
    description:
      'Organize all your bookings and documents in a centralized workspace. Collaborate with your team and streamline your workflow efficiently.',
  },
  {
    sortOrder: 3,
    blockKey: 'financialInsights',
    title: 'Financial Insights',
    description:
      'Track invoices, payments, and financial analytics with comprehensive reporting tools. Make informed decisions with real-time financial data.',
  },
];

const bookDemoFeatureBlocks = [
  {
    sortOrder: 0,
    blockKey: 'workspaceBookingManagement',
    title: 'Workspace & Booking Management',
    description:
      'Organize and manage all your bookings in one centralized workspace. Track status, manage documents, and collaborate with your team seamlessly.',
  },
  {
    sortOrder: 1,
    blockKey: 'ediDocumentManagement',
    title: 'EDI & Document Management',
    description:
      'Efficiently create, manage, and track EDI documents with our intuitive interface. Streamline your logistics operations with real-time updates.',
  },
  {
    sortOrder: 2,
    blockKey: 'financialManagement',
    title: 'Financial Management',
    description:
      'Keep track of invoices, payments, and financial transactions. Generate reports and manage your billing with comprehensive financial tools.',
  },
  {
    sortOrder: 3,
    blockKey: 'aiAgent',
    title: 'AI Agent',
    description:
      'Leverage intelligent AI assistance to automate tasks, get instant answers, and streamline your logistics workflows. Our AI agent helps you work smarter and faster.',
  },
  {
    sortOrder: 4,
    blockKey: 'employeePerformanceManagement',
    title: 'Employee and Performance Management',
    description:
      'Effectively manage your team with comprehensive employee tracking and performance metrics. Monitor productivity, assign tasks, and optimize workforce efficiency.',
  },
  {
    sortOrder: 5,
    blockKey: 'marketplaceOpportunity',
    title: 'Portmasters Marketplace Opportunity',
    description:
      'Access Portmasters marketplace to discover new customers and orders. Expand your business reach and connect with potential clients through our integrated marketplace platform.',
  },
];

const landingPages = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    sections: privacyPolicySections,
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms And Conditions',
    sections: termsSections,
  },
  {
    slug: 'line-terms-and-conditions',
    title: 'Terms And Conditions',
    sections: termsSections,
  },
  {
    slug: 'faq-page',
    title: 'Frequently Asked Questions',
    description:
      'Find quick answers to common questions about our services, booking process, and support options to make your Portmasters experience smooth and simple.',
  },
  {
    slug: 'contact-us',
    title: 'Contact us',
    description:
      "We're here to assist with any questions or support you need. Whether it's about our services or a specific shipment, feel free to reach out, and our team will get back to you promptly.",
  },
  {
    slug: 'book-demo',
    title: 'Book a Demo',
    description:
      'Experience the power of Pormasters Panel. See how our platform can transform your logistics operations with a personalized demo tailored to your business needs.',
    extraFields: {
      requestDemo: 'Request Your Demo',
      requestDescription:
        'Fill out the form below and our team will reach out to schedule a personalized demo of the Portmasters Panel.',
      powerfulFeatures: 'Powerful Features',
      featuresDescription:
        'Discover the key features that make Carrier Panel the perfect solution for your logistics needs',
      demoMessagePlaceholder:
        "Tell us about your logistics needs or any specific features you'd like to see in the demo",
    },
    sliderBlocks: bookDemoSliderBlocks,
    featureBlocks: bookDemoFeatureBlocks,
  },
  {
    slug: 'plans-pricing',
    title: 'Plans & Pricing',
    description:
      "Scale your logistics operations with confidence. We're here to help you find the perfect solution for your business.",
    extraFields: {
      mostPopular: 'Most Popular',
      contactSales: 'Contact sales',
      needCustomFeatures: 'Need custom features? Contact us',
      contactUs: 'Contact us',
      toBuildTailoredPlan:
        'to build a tailored plan with custom 3rd party integrations and usage options.',
    },
  },
  {
    slug: 'plans-pricing-contact',
    title: "Let's Build Your Perfect Plan",
    description:
      "Connect with our sales team to explore custom solutions tailored to your business. We're here to help you scale smarter and ship faster.",
  },
];

const faqItems = [
  {
    sortOrder: 0,
    question: 'How can I get a shipping quote?',
    answer: '<p></p>',
    isPublished: true,
  },
  {
    sortOrder: 1,
    question: 'What types of cargo do you handle?',
    answer: '<p></p>',
    isPublished: true,
  },
  {
    sortOrder: 2,
    question: 'How do I track my shipment?',
    answer: '<p></p>',
    isPublished: true,
  },
  {
    sortOrder: 3,
    question: 'What is the estimated delivery time for my shipment?',
    answer: '<p></p>',
    isPublished: true,
  },
];

const pricingPlans = [
  {
    planKey: 'basic',
    name: 'Basic',
    price: '$2000 /yr',
    description: 'Start your logistics journey',
    isMostPopular: false,
    sortOrder: 0,
    features: parseFeatures('1 Employee · 1 Daily New Rate · Ticketing (Standard Priority)'),
  },
  {
    planKey: 'professional',
    name: 'Professional',
    price: '$6000 /yr',
    description: 'Scale your operations with confidence',
    isMostPopular: true,
    sortOrder: 1,
    features: parseFeatures(
      '3 Employees · 5 Daily New Rate · Ticketing (Standard Priority) · Finance Reports · Employee Management · 2 New Special Offer per Month · Export EDI · Document Template Storage · 10 Vessel Tracking per Day · WhatsApp Notifications',
    ),
  },
  {
    planKey: 'business',
    name: 'Business',
    price: '$9000 /yr',
    description: 'Advanced tools to take your work to the next level',
    isMostPopular: false,
    sortOrder: 2,
    features: parseFeatures(
      '5 Employees · 10 Daily New Rate · Ticketing (Standard Priority) · Finance Reports · Employee Management · 2 New Special Offer per Month · Export EDI · Document Template Storage · 10 Vessel Tracking per Day · WhatsApp Notifications · SMS Notifications · Priority Support',
    ),
  },
];

module.exports = {
  landingPages,
  faqItems,
  pricingPlans,
};

# Landing content import — Strapi seed data

Use this document to manually enter content in Strapi Admin (locale **en** first), or feed it to the Strapi setup prompt in [`STRAPI_SETUP.md`](./STRAPI_SETUP.md).

> **Note:** FAQ answers are empty in the current site — add real answers in Strapi before publishing.

## Checklist

| Strapi collection | Slug / key | Website route |
| ----------------- | ---------- | ------------- |
| `landing-page` | `privacy-policy` | `/privacy-policy` |
| `landing-page` | `terms-and-conditions` | `/terms-and-conditions` |
| `landing-page` | `line-terms-and-conditions` | `/line-terms-and-conditions` |
| `landing-page` | `faq-page` | `/faq` |
| `faq-item` | (4 items) | `/faq` |
| `landing-page` | `contact-us` | `/contact-us` |
| `landing-page` | `book-demo` | `/book-demo` |
| `landing-page` | `plans-pricing` | `/plans-and-pricing` |
| `pricing-plan` | `basic`, `professional`, `business` | `/plans-and-pricing` |
| `landing-page` | `plans-pricing-contact` | `/plans-and-pricing/contact` |

---

## landing-page: `privacy-policy`

- **title:** Privacy Policy
- **sections:**

| sortOrder | sectionKey | heading | contentType | content |
| --------- | ---------- | ------- | ----------- | ------- |
| 0 | introduction | Introduction | paragraph | At Portmasters, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share information about you when you interact with our platform. |
| 1 | user-information-we-collect | Information We Collect | bullet_list | • Personal Information: When you create an account, book a shipment, or contact support, we may collect information such as your name, email address, phone number, and payment details.<br>• Cargo and Shipment Details: To process your shipments, we collect relevant data such as cargo weight, dimensions, origin, and destination.<br>• Technical Information: We may collect data about your device and interaction with our site, including IP address, browser type, and cookie data. |
| 2 | how-we-use-your-information | How We Use Your Information | bullet_list | • Service Provision: To create and manage your account, process shipments, and ensure smooth service delivery<br>• Communication: To provide updates, send confirmations, answer inquiries, and notify you of any changes or updates to our services.<br>• Improvement and Personalization: To improve website functionality, optimize user experience, and provide relevant content and offers.<br>• Security and Compliance: To protect against fraud, manage risk, and comply with legal obligations. |
| 3 | sharing-of-information | Sharing of Information | bullet_list | • With Service Providers: We may share your information with trusted partners, such as shipping carriers and payment processors, to fulfill your service requests<br>• With Third-Party Services: For analytics, advertising, or legal compliance, we may share limited information with authorized third-party platforms in line with this policy.<br>• Legal Requirements: If required by law or to protect the rights, property, or safety of Portmasters and its users, we may disclose your information to comply with legal obligations. |
| 4 | cookies-and-tracking-technologies | Cookies and Tracking Technologies | paragraph | Portmasters uses cookies and similar technologies to recognize you, improve your user experience, and analyze website traffic. You can manage your cookie preferences in your browser settings. |
| 5 | data-security | Data Security | paragraph | We implement industry-standard security measures to protect your information. While we strive to protect all data, no security system is completely secure; users should also take steps to safeguard their accounts. |
| 6 | data-retention | Data Retention | paragraph | We retain your information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, or as otherwise stated to you at the time of collection. |
| 7 | your-privacy-rights | Your Privacy Rights | paragraph | Depending on your location, you may have rights to access, correct, delete, or limit the use of your data. To exercise these rights, please contact us at support@portmasters.com. |
| 8 | changes-to-this-policy | Changes to This Policy | paragraph | Portmasters may update this Privacy Policy periodically to reflect changes in practices or legal requirements. We will notify you of significant changes and update the policy on our site. |
| 9 | contact-information | Contact Information | paragraph | For questions or concerns regarding these Terms and Conditions, contact us at support@portmasters.com. |

---

## landing-page: `terms-and-conditions`

- **title:** Terms And Conditions
- **sections:** (same structure as privacy; content below)

| sortOrder | sectionKey | heading | contentType | content |
| --------- | ---------- | ------- | ----------- | ------- |
| 0 | introduction | Introduction | paragraph | At Portmasters, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share information about you when you interact with our platform. |
| 1 | service-scope | Service Scope | paragraph | Portmasters offers a platform to compare, book, and manage shipping services across various providers. We are not the direct providers of transportation but serve as an intermediary to connect users with verified carriers. |
| 2 | account-registration | Account Registration | paragraph | Users must register and create an account to book shipments. You agree to provide accurate and current information and to update any changes to maintain account accuracy. |
| 3 | booking-terms | Booking Terms | bullet_list | • Users are responsible for entering correct information regarding the origin, destination, cargo type, weight, and dimensions. Portmasters is not responsible for any discrepancies arising from incorrect information provided by the user.<br>• Upon booking, users will receive a confirmation email and tracking details. |
| 4 | payment-terms | Payment Terms | paragraph | All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping). |
| 5 | cargo-and-liability | Cargo and Liability | bullet_list | • Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement. |
| 6 | cancellation-and-refunds | Cancellation and Refunds | bullet_list | • Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement. |
| 7 | data-protection-and-privacy | Data Protection and Privacy | paragraph | All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping). |
| 8 | user-responsibilities | User Responsibilities | paragraph | Users agree to refrain from any misuse of the platform, including providing false information, attempting to disrupt service, or infringing on the rights of others. |
| 9 | dispute-resolution | Dispute Resolution | paragraph | Any disputes arising out of or related to the use of Portmasters' services will be handled through binding arbitration in accordance with local laws. |
| 10 | changes-to-terms | Changes to Terms | paragraph | Portmasters reserves the right to modify or update these Terms and Conditions. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of these adjustments. |
| 11 | contact-information | Contact Information | paragraph | For questions or concerns regarding these Terms and Conditions, contact us at support@portmasters.com. |

---

## landing-page: `line-terms-and-conditions`

- **title:** Terms And Conditions
- **sections:** (from hardcoded `LineTermsAndConditions.tsx` — preserves current site text as-is)

| sortOrder | sectionKey | heading | contentType | content |
| --------- | ---------- | ------- | ----------- | ------- |
| 0 | introduction | Introduction | paragraph | At Portmasters, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share information about you when you interact with our platform. |
| 1 | service-scope | Service Scope | paragraph | Portmasters offers a platform to compare, book, and manage shipping services across various providers. We are not the direct providers of transportation but serve as an intermediary to connect users with verified carriers. |
| 2 | account-registration | Account Registration | paragraph | Users must register and create an account to book shipments. You agree to provide accurate and current information and to update any changes to maintain account accuracy. |
| 3 | booking-terms | Booking Terms | bullet_list | • Users are responsible for entering correct information regarding the origin, destination, cargo type, weight, and dimensions. Portmasters is not responsible for any discrepancies arising from incorrect information provided by the user.<br>• Upon booking, users will receive a confirmation email and tracking details. |
| 4 | payment-terms | Payment Terms | paragraph | All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping). |
| 5 | cargo-and-liability | Cargo and Liability | bullet_list | • Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement. |
| 6 | cancellation-and-refunds | Cancellation and Refunds | bullet_list | • Portmasters and its partnered carriers are not liable for damages arising from inadequate packaging, mislabeling, or incorrect cargo declarations.<br>• Users are responsible for ensuring that their cargo complies with all relevant import/export laws and regulations of the countries involved in the shipment.<br>• In cases of loss, damage, or delay, claims must be filed directly with the selected carrier as per their terms. Portmasters may assist in coordinating communications but is not responsible for settlement. |
| 7 | data-protection-and-privacy | Data Protection and Privacy | paragraph | All bookings require full payment at the time of confirmation. Payments can be made via credit card, bank transfer, or other methods listed at checkout. Additional fees may apply for specific services (e.g., insurance, express shipping). |
| 8 | user-responsibilities | User Responsibilities | paragraph | Users agree to refrain from any misuse of the platform, including providing false information, attempting to disrupt service, or infringing on the rights of others. |
| 9 | dispute-resolution | Dispute Resolution | paragraph | Any disputes arising out of or related to the use of Portmasters' services will be handled through binding arbitration in accordance with local laws. |
| 10 | changes-to-terms | Changes to Terms | paragraph | Portmasters reserves the right to modify or update these Terms and Conditions. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of these adjustments. |
| 11 | contact-information | Contact Information | paragraph | For questions or concerns regarding these Terms and Conditions, contact us at support@portmasters.com. |

---

## landing-page: `faq-page`

- **title:** Frequently Asked Questions
- **description:** Find quick answers to common questions about our services, booking process, and support options to make your Portmasters experience smooth and simple.

## faq-item (locale: en)

| sortOrder | question | answer |
| --------- | -------- | ------ |
| 0 | How can I get a shipping quote? | _(empty — add in Strapi)_ |
| 1 | What types of cargo do you handle? | _(empty — add in Strapi)_ |
| 2 | How do I track my shipment? | _(empty — add in Strapi)_ |
| 3 | What is the estimated delivery time for my shipment? | _(empty — add in Strapi)_ |

### FAQ questions — other locales (titles only; add answers in Strapi per locale)

**ar**

| sortOrder | question |
| --------- | -------- |
| 0 | كيف يمكنني الحصول على عرض أسعار للشحن؟ |
| 1 | ما أنواع البضائع التي تتعاملون معها؟ |
| 2 | كيف يمكنني تتبع شحنتي؟ |
| 3 | ما هو الوقت المقدر للتسليم لشحنتي؟ |

**nl**

| sortOrder | question |
| --------- | -------- |
| 0 | Hoe kan ik een verzendofferte krijgen? |
| 1 | Welke soorten vracht behandelt u? |
| 2 | Hoe kan ik mijn zending volgen? |
| 3 | Wat is de geschatte levertijd voor mijn zending? |

**de**

| sortOrder | question |
| --------- | -------- |
| 0 | Wie kann ich ein Versandangebot erhalten? |
| 1 | Welche Frachtarten behandeln Sie? |
| 2 | Wie kann ich meine Sendung verfolgen? |
| 3 | Wie ist die geschätzte Lieferzeit für meine Sendung? |

---

## landing-page: `contact-us`

- **title:** Contact us
- **description:** We're here to assist with any questions or support you need. Whether it's about our services or a specific shipment, feel free to reach out, and our team will get back to you promptly.

---

## landing-page: `book-demo`

- **title:** Book a Demo
- **description:** Experience the power of Pormasters Panel. See how our platform can transform your logistics operations with a personalized demo tailored to your business needs.
- **extraFields (JSON):**

```json
{
  "requestDemo": "Request Your Demo",
  "requestDescription": "Fill out the form below and our team will reach out to schedule a personalized demo of the Portmasters Panel.",
  "powerfulFeatures": "Powerful Features",
  "featuresDescription": "Discover the key features that make Carrier Panel the perfect solution for your logistics needs",
  "demoMessagePlaceholder": "Tell us about your logistics needs or any specific features you'd like to see in the demo"
}
```

- **sliderBlocks:**

| sortOrder | blockKey | title | description |
| --------- | -------- | ----- | ----------- |
| 0 | comprehensiveDashboard | Comprehensive Dashboard | Get a complete overview of all your logistics operations in one place. Monitor active bookings, track shipments, and access key metrics instantly. |
| 1 | advancedManifestManagement | Advanced Manifest Management | Create and manage shipping manifests with ease. Our intuitive interface allows you to track every detail of your shipments in real-time. |
| 2 | smartWorkspace | Smart Workspace | Organize all your bookings and documents in a centralized workspace. Collaborate with your team and streamline your workflow efficiently. |
| 3 | financialInsights | Financial Insights | Track invoices, payments, and financial analytics with comprehensive reporting tools. Make informed decisions with real-time financial data. |

- **featureBlocks:**

| sortOrder | blockKey | title | description |
| --------- | -------- | ----- | ----------- |
| 0 | workspaceBookingManagement | Workspace & Booking Management | Organize and manage all your bookings in one centralized workspace. Track status, manage documents, and collaborate with your team seamlessly. |
| 1 | ediDocumentManagement | EDI & Document Management | Efficiently create, manage, and track EDI documents with our intuitive interface. Streamline your logistics operations with real-time updates. |
| 2 | financialManagement | Financial Management | Keep track of invoices, payments, and financial transactions. Generate reports and manage your billing with comprehensive financial tools. |
| 3 | aiAgent | AI Agent | Leverage intelligent AI assistance to automate tasks, get instant answers, and streamline your logistics workflows. Our AI agent helps you work smarter and faster. |
| 4 | employeePerformanceManagement | Employee and Performance Management | Effectively manage your team with comprehensive employee tracking and performance metrics. Monitor productivity, assign tasks, and optimize workforce efficiency. |
| 5 | marketplaceOpportunity | Portmasters Marketplace Opportunity | Access Portmasters marketplace to discover new customers and orders. Expand your business reach and connect with potential clients through our integrated marketplace platform. |

---

## landing-page: `plans-pricing`

- **title:** Plans & Pricing
- **description:** Scale your logistics operations with confidence. We're here to help you find the perfect solution for your business.
- **extraFields (JSON):**

```json
{
  "mostPopular": "Most Popular",
  "contactSales": "Contact sales",
  "needCustomFeatures": "Need custom features? Contact us",
  "contactUs": "Contact us",
  "toBuildTailoredPlan": "to build a tailored plan with custom 3rd party integrations and usage options."
}
```

## pricing-plan (locale: en)

### basic (sortOrder: 0)

- **name:** Basic
- **price:** $2000 /yr
- **description:** Start your logistics journey
- **isMostPopular:** false
- **features:** 1 Employee · 1 Daily New Rate · Ticketing (Standard Priority)

### professional (sortOrder: 1)

- **name:** Professional
- **price:** $6000 /yr
- **description:** Scale your operations with confidence
- **isMostPopular:** true
- **features:** 3 Employees · 5 Daily New Rate · Ticketing (Standard Priority) · Finance Reports · Employee Management · 2 New Special Offer per Month · Export EDI · Document Template Storage · 10 Vessel Tracking per Day · WhatsApp Notifications

### business (sortOrder: 2)

- **name:** Business
- **price:** $9000 /yr
- **description:** Advanced tools to take your work to the next level
- **isMostPopular:** false
- **features:** 5 Employees · 10 Daily New Rate · Ticketing (Standard Priority) · Finance Reports · Employee Management · 2 New Special Offer per Month · Export EDI · Document Template Storage · 10 Vessel Tracking per Day · WhatsApp Notifications · SMS Notifications · Priority Support

---

## landing-page: `plans-pricing-contact`

- **title:** Let's Build Your Perfect Plan
- **description:** Connect with our sales team to explore custom solutions tailored to your business. We're here to help you scale smarter and ship faster.

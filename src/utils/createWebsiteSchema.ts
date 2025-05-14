import og from '../images/og.png';
import { createOrganizationSchema } from './createOrganizationSchema';

export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://diploi.com/',
      name: 'Diploi – Magical Developer Experience',
      about: { '@id': 'https://diploi.com/#organization' },
      image: og.src,
      description: 'Single SaaS service for managing, developing and hosting your full application.',
      inLanguage: 'English',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://diploi.com/'] }],
    },
    createOrganizationSchema({ isLong: true }),
  ],
});

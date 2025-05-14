import icon from '../images/logo-icon.svg';
import og from '../images/og.png';

interface CreateOrganizationSchemaParams {
  isLong?: boolean;
}

export const createOrganizationSchema = ({ isLong = false }: CreateOrganizationSchemaParams = {}) => ({
  '@type': ['OnlineBusiness', 'Brand'],
  '@id': 'https://diploi.com/#organization',
  name: 'Diploi',
  logo: icon.src,
  image: og.src,
  url: 'https://diploi.com/',
  ...(isLong
    ? {
        legalName: 'Diploi Ltd',
        vatID: 'FI34195512',
        description: 'One-stop-shop for managing, developing and hosting your full application.',
        slogan: 'Magical Developer Experience',
        foundingDate: '2024-1-15',
        sameAs: [
          'https://github.com/diploi',
          'https://bsky.app/profile/diploi.com',
          'https://www.linkedin.com/company/diploidev',
          'https://dev.to/diploi',
          'https://x.com/DiploiDev',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'hello@diploi.com',
          url: 'https://diploi.com/',
        },
      }
    : {}),
});

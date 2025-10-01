import { createOrganizationSchema } from '../../../utils/createOrganizationSchema';
import { getFullImageUrl } from '../../../utils/ogUtils';

export interface CreateBlogPostSchemaParams {
  title: string;
  description: string;
  image?: { src?: string } | null;
  author: string;
  timestamp: string;
  url: URL | string;
  externalUrl?: string;
}

export const createBlogPostSchema = ({ title, description, image, url, externalUrl, author, timestamp }: CreateBlogPostSchemaParams) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  ...(image
    ? {
        image: getFullImageUrl({ imageUrl: image.src }),
      }
    : {}),
  url,
  ...(externalUrl
    ? {
        sameAs: externalUrl,
      }
    : {}),
  inLanguage: 'English',
  isAccessibleForFree: 'true',
  author: {
    '@type': 'Person',
    name: author,
    url: 'https://diploi.com/',
  },
  sourceOrganization: createOrganizationSchema(),
  datePublished: new Date(timestamp).toISOString(),
});

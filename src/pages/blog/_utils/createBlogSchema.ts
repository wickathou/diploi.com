import { type CreateBlogPostSchemaParams, createBlogPostSchema } from './createBlogPostSchema';
import { createOrganizationSchema } from './createOrganizationSchema';

interface CreateBlogSchemaParams {
  url: URL | string;
  blogPosts: CreateBlogPostSchemaParams[];
}

export const createBlogSchema = ({ url, blogPosts }: CreateBlogSchemaParams) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Diploi Blog',
  mainEntityOfPage: url,
  publisher: createOrganizationSchema(),
  blogPost: blogPosts.map((blog) => createBlogPostSchema(blog)),
});

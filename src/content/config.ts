import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      author: z.string(),
      timestamp: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};

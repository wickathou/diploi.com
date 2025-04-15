import { z, defineCollection } from 'astro:content';
import { blogLoader } from './loaders/blogLoader';
import { componentLoader } from './loaders/componentLoader';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: blogLoader({
    apiKey: import.meta.env.DEVTO_API_KEY,
  }),
});

const componentCollection = defineCollection({
  loader: componentLoader({
    apiUrl: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.API_KEY,
  }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/legal' }),
  schema: z.object({
      title:z.string(),
      description: z.string(),
      timestamp: z.string(),
    })
})

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
  component: componentCollection,
};

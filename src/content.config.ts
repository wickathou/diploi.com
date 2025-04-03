import { defineCollection } from 'astro:content';
import { blogLoader } from './loaders/blogLoader';
import { componentLoader } from './loaders/componentLoader';

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

export const collections = {
  blog: blogCollection,
  component: componentCollection,
};

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://diploi.com',
  trailingSlash: 'never',
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
    mdx(),
    sentry({
      dsn: 'https://df15d51df97371766b31299d9a5614a1@o4509195528437760.ingest.de.sentry.io/4509195529879632',
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: 'website',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});

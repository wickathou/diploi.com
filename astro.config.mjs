import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import playformInline from '@playform/inline';
import sentry from '@sentry/astro';
import astroLLMsGenerator from 'astro-llms-generate';
import { defineConfig, fontProviders, envField } from 'astro/config';
import llmsTxtReplacer from './buildUtils/llmsTxtReplacer';
import { diploiDescription } from './buildUtils/seoVariables';

// https://astro.build/config
export default defineConfig({
  site: 'https://diploi.com',
  trailingSlash: 'never',
  env: {
    schema: {
      VITE_API_URL: envField.string({ context: 'client', access: 'public', optional: false }),
      API_KEY: envField.string({ context: 'server', access: 'secret', optional: false }),
      DEVTO_API_KEY: envField.string({ context: 'server', access: 'secret', optional: false }),
    },
  },
  integrations: [
    astroLLMsGenerator({
      description: diploiDescription,
    }),
    llmsTxtReplacer(),
    react({
      include: ['**/react/*'],
    }),
    sitemap({
      customPages: ['https://diploi.com/llms.txt', 'https://diploi.com/llms-small.txt', 'https://diploi.com/llms-full.txt'],
    }),
    mdx(),
    sentry({
      dsn: 'https://df15d51df97371766b31299d9a5614a1@o4509195528437760.ingest.de.sentry.io/4509195529879632',
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      sourceMapsUploadOptions: {
        project: 'website',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    playformInline({
      Beasties: {
        fonts: false,
        allowRules: ['.text-gradient', '.title-and-description', '.button'],
      },
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Montserrat',
        cssVariable: '--font-header',
        weights: ['600 800'],
      },
      {
        provider: fontProviders.google(),
        name: 'Source Sans 3',
        cssVariable: '--font-body',
        weights: ['200 900'],
      },
    ],
  },
});

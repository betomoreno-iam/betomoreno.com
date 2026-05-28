import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://betomoreno.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  adapter: vercel(),
});
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
import node from '@astrojs/node';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), react(), db()]
});
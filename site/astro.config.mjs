import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edenwang123.github.io',
  base: '/ShuyuWang',
  integrations: [tailwind()],
  output: 'static',
});

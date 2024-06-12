import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kizunacatering.my.id/',
  integrations: [mdx(), 
		sitemap(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
    tailwind(),]
});

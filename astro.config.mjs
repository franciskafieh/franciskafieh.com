import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [svelte(), astroImageTools, partytown(), robotsTxt(), sitemap()],
  experimental: {
    integrations: true,
  },
});
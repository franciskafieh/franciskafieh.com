import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [svelte(), partytown(), robotsTxt(), sitemap(), compress()],
  experimental: {
    integrations: true
  }
});
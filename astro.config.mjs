import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import fonts from 'astro-fonts-next';

// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [
    svelte(), 
    partytown(), 
    robotsTxt(), 
    sitemap(), 
    compress(),
    fonts({ url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Montserrat:wght@400;700;800&display=swap' }),
  ],
  experimental: {
    integrations: true
  }
});
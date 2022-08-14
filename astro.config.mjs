import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import fonts from 'astro-fonts-next';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// import readingTime from 'remark-reading-time';
// import readingMdxTime from 'remark-reading-time';
import { getReadTime } from './src/lib/remark-read-time.mjs';


// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [
    partytown(), robotsTxt(), sitemap(), compress(),
    mdx({
      remarkPlugins: { extends: [getReadTime] },
    }), 
    fonts({
      url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Montserrat:wght@400;700;800&display=swap'
    }),
    tailwind()
  ],
  experimental: {
    integrations: true,
  },
  markdown: {
    syntaxHighlight: 'prism',
  }
});
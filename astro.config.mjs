import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import fonts from 'astro-fonts-next';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

import { getReadTime } from './remark-read-time.mjs';
import remarkCapitalize from 'remark-capitalize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeAddClasses from 'rehype-add-classes';
import { h } from 'hastscript';
import { rehypePrismCommon } from 'rehype-prism-plus';


// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [
    partytown(), robotsTxt(), sitemap(), compress(),
    mdx({
      remarkPlugins: { extends: [getReadTime, remarkCapitalize] },
      rehypePlugins: { extends: [
        [rehypeAutolinkHeadings, {      
          content(_node) {
            return [h('span.group-hover:text-red-400', '#')]
          }
        }],
        [rehypeAddClasses, {h1: 'group'}],
        [rehypePrismCommon, {showLineNumbers: true, ignoreMissing: true}]
      ]},
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
    // using rehype-prism-plus
    syntaxHighlight: false,
  }
});
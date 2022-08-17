import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
// import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { getReadTime } from "./src/lib/remark-read-time.mjs";
import remarkCapitalize from "remark-capitalize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";
import { rehypePrismCommon } from "rehype-prism-plus";
import prefetch from "@astrojs/prefetch";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [robotsTxt(), sitemap(), compress(), mdx({
    remarkPlugins: {
      extends: [getReadTime, remarkCapitalize]
    },
    rehypePlugins: {
      extends: [[rehypeAutolinkHeadings, {
        content(_node) {
          return [h("span", "#")];
        }

      }], [rehypePrismCommon, {
        ignoreMissing: true
      }]]
    }
  }), tailwind(), prefetch({
    // select all internal links
    selector: "a[href^='/']"
  }), 
  // critters()
],
  experimental: {
    integrations: true
  },
  markdown: {
    // using rehype-prism-plus
    syntaxHighlight: false
  }
});
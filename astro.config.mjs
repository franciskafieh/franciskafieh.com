import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
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
import sectionize from "remark-sectionize";
import { setDefaultLayout } from "./src/lib/remark-default-layout.mjs";
import { setPublishedEditedDates } from "./src/lib/remark-auto-pub-edit-date.mjs";

export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [
    robotsTxt({
      policy: [
        {
          disallow: "/form",
        },
      ],
    }),
    sitemap(),
    compress(),
    mdx({
      remarkPlugins: {
        extends: [
          getReadTime,
          remarkCapitalize,
          sectionize,
          setDefaultLayout,
          setPublishedEditedDates,
        ],
      },
      rehypePlugins: {
        extends: [
          [
            rehypeAutolinkHeadings,
            {
              content(_node) {
                return [
                  h("span.invisible.text-accent.absolute.-left-5.pr-3", "#"),
                ];
              },
            },
          ],
          [
            rehypePrismCommon,
            {
              ignoreMissing: true,
            },
          ],
        ],
      },
    }),
    tailwind({ config: { applyBaseStyles: false } }),
    prefetch({
      // select all internal links
      selector: "a[href^='/']",
    }),
    partytown(),
  ],
  experimental: {
    integrations: true,
  },
  markdown: {
    // using rehype-prism-plus
    syntaxHighlight: false,
  },
});

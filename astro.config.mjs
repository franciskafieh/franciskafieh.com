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
import sectionize from "remark-sectionize";
import { setDefaultLayout } from "./src/lib/remark-default-layout.mjs";
import { setPublishedEditedDates } from "./src/lib/remark-auto-pub-edit-date.mjs";
import { setBlogContentPreview } from "./src/lib/remark-blog-content-preview.mjs";
import autoImports from "@mdxvac/remark-astro-autoimports";

export default defineConfig({
  site: "https://franciskafieh.com",
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
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
          setBlogContentPreview,
          autoImports,
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
    partytown(),
    astroOGImage(),
  ],
  experimental: {
    integrations: true,
  },
  markdown: {
    // using rehype-prism-plus
    syntaxHighlight: false,
  },
});

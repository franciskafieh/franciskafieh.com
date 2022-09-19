import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Francis Kafieh’s Blog",
    description: "Francis' blog about tech and productivity",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/post/*.mdx"),
    customData: `<language>en-us</language>`,
    stylesheet: "/rss/styles.xsl",
  });

// If no layout is specified, use the BlogPost layout, from https://github.com/jordemort/jordemort.github.io/blob/main/src/plugins/defaultlayout.mjs

export function setDefaultLayout() {
  return function (_, file) {
    if (
      typeof file.data.astro.frontmatter.layout === "undefined" ||
      file.data.astro.frontmatter.layout === null
    ) {
      file.data.astro.frontmatter.layout = "/src/layouts/BlogPost.astro";
    }
  };
}

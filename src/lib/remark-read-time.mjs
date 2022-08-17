// code ported from https://github.com/mattjennings/remark-reading-time/ to work with astro

import getReadingTime from "reading-time";
import { visit } from "unist-util-visit";

export function getReadTime() {
  return function (tree, file) {
    let content = "";

    visit(tree, ["text", "code"], (node) => {
      content += node.value;
    });

    file.data.astro.frontmatter.readTime = getReadingTime(content).text;
  };
}

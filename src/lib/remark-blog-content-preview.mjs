import { visit } from "unist-util-visit";

const textLimit = 700;

export function setBlogContentPreview() {
  return function (tree, file) {
    let content = "";

    visit(tree, "paragraph", (node) => {
      node.children.forEach((child) => {
        content += child.value += " ";
      });
    });

    if (content.length > textLimit) {
      content = content.substring(0, textLimit).concat("...");
    }

    file.data.astro.frontmatter.strippedContent = content;
  };
}

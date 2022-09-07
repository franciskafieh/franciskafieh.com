// Automatically populate pubDate and updatedDate from git metadata, from https://github.com/jordemort/jordemort.github.io/blob/main/src/plugins/repodates.mjs

import * as child from "node:child_process";
import * as os from "node:os";

function setPublishedDate(mdPath) {
  try {
    const stdout = child.execFileSync(
      "git",
      ["log", "--diff-filter=A", "--follow", "--format=%ai", "--", mdPath],
      { encoding: "utf8" }
    );

    return stdout.trim().split(os.EOL).pop();
  } catch (_) {
    return "";
  }
}

function setUpdatedDate(mdPath) {
  try {
    return child
      .execFileSync("git", ["log", "-1", "--pretty=format:%ai", "--", mdPath], {
        encoding: "utf8",
      })
      .trim();
  } catch (_) {
    return "";
  }
}

export function setPublishedEditedDates() {
  return function (_, file) {
    let pubDate = setPublishedDate(file.path);

    if (pubDate.length < 1) {
      // Probably not committed yet
      // Return today's date so building it doesn't choke
      pubDate = Date().toString();
    }

    file.data.astro.frontmatter = { pubDate, ...file.data.astro.frontmatter };
    let updatedDate = setUpdatedDate(file.path);
    if (updatedDate.length > 0 && updatedDate != pubDate) {
      file.data.astro.frontmatter = {
        updatedDate,
        ...file.data.astro.frontmatter,
      };
    }
  };
}

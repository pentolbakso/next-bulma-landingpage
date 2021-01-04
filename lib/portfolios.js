import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const portfoliosDir = path.join(process.cwd(), "data/portfolios");

let portfolioCache = [];

function scanDirectory() {
  if (portfolioCache.length > 0) {
    return portfolioCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(portfoliosDir);
  portfolioCache = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(portfoliosDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
        },
      });
      const matterData = matterResult.data;
      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  return portfolioCache;
}

export function listPortfolios(tag) {
  return scanDirectory().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  );
}

export function getPortfolioContent(slug) {
  const fullPath = path.join(portfoliosDir, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, "utf8");
  return content;
}

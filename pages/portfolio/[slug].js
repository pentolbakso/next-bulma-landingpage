import { NextSeo } from "next-seo";
import Link from "next/link";
import { getPortfolioContent, listPortfolios } from "../../lib/portfolios";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import yaml from "js-yaml";
import Image from "next/image";

export default function PortfolioContent({ source, frontMatter }) {
  const content = hydrate(source, {});
  const { title, tags, image } = frontMatter;
  return (
    <>
      <NextSeo title={title} />

      <main>
        <section class="section is-small">
          <div class="container">
            <Link href="/portfolio" passHref>
              <a class="has-text-weight-bold">&#x2190; Portfolios</a>
            </Link>
            <h2 class="is-size-3">{title}</h2>
            <div class="tags mt-3">
              {tags.map((tag) => (
                <Link href={`/portfolio/tag/${tag}`}>
                  <a class="tag">{tag}</a>
                </Link>
              ))}
            </div>
            <Image
              src={image}
              alt={title}
              layout="responsive"
              width={400}
              height={200}
            />

            <div class="content mt-3">{content}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const portfolioContent = await getPortfolioContent(params.slug);
  const { data, content } = matter(portfolioContent, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  const mdxSource = await renderToString(content, {
    scope: {},
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = listPortfolios().map((it) => ({
    params: {
      slug: it.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

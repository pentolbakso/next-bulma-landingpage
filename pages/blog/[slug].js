import { NextSeo } from "next-seo";
import Link from "next/link";
import { getPostContent, listPosts } from "../../lib/posts";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import yaml from "js-yaml";
import dayjs from "dayjs";

export default function PostContent({ source, frontMatter }) {
  const content = hydrate(source, {});
  const { title, date, tags } = frontMatter;
  return (
    <>
      <NextSeo title={title} />

      <main>
        <section class="section is-small">
          <div class="container">
            <Link href="/blog" passHref>
              <a class="has-text-weight-bold">&#x2190; Blog</a>
            </Link>
            <h2 class="is-size-3">{title}</h2>
            <div class="tags mt-3">
              <span class="tag is-info is-light">
                {dayjs(date).format("DD MMM YYYY")}
              </span>
              {tags.map((tag) => (
                <Link href={`/blog/tag/${tag}`}>
                  <a class="tag">{tag}</a>
                </Link>
              ))}
            </div>
            <hr class="mt-0" />

            <div class="content mt-3">{content}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postContent = await getPostContent(params.slug);
  const { data, content } = matter(postContent, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  // TODO map tags

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
  const paths = listPosts(1, 65535).map((it) => ({
    params: {
      slug: it.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

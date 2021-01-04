import { NextSeo } from "next-seo";
import Link from "next/link";
import { listPosts, countPosts } from "../../../lib/posts";
import config from "../../../cms/site-settings.json";
import { listTags } from "../../../lib/tags";

export default function Page({ posts, tags, pagination }) {
  return (
    <>
      <NextSeo title={`Blog Page ${pagination.current}`} />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Blog - Page {pagination.current}</h2>
            <div class="tags mt-3">
              {tags.map((tag) => (
                <Link href={`/blog/tag/${tag.slug}`}>
                  <a class="tag">{tag.name}</a>
                </Link>
              ))}
            </div>
            <hr class="mt-0" />

            {posts.map((post) => (
              <div class="block mt-3">
                <div class="is-size-7 has-text-grey">{post.date}</div>
                <div class="is-size-4">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
              </div>
            ))}

            <div class="buttons has-addons is-centered">
              <Link
                href={
                  pagination.current == 2
                    ? `/blog`
                    : `/blog/page/${parseInt(pagination.current) - 1}`
                }
              >
                <div class="button">Previous</div>
              </Link>
              {pagination.current < pagination.total && (
                <Link href={`/blog/page/${parseInt(pagination.current) + 1}`}>
                  <div class="button">Next</div>
                </Link>
              )}
              {pagination.current == pagination.total && (
                <div class="button" disabled>
                  Next
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = listPosts(params.page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: params.page,
    total: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
}

export async function getStaticPaths() {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

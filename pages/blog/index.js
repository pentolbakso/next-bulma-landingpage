import { NextSeo } from "next-seo";
import Link from "next/link";
import { listPosts, countPosts } from "../../lib/posts";
import config from "../../cms/site-settings.json";
import { listTags } from "../../lib/tags";

export default function Blog({ posts, tags, pagination }) {
  return (
    <>
      <NextSeo title="Blog" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-4">Blog</h2>
            <div class="tags mt-3">
              {tags.map((tag) => (
                <Link href={`/blog/tag/${tag.slug}`}>
                  <a class="tag">{tag.name}</a>
                </Link>
              ))}
            </div>

            {posts.map((post) => (
              <div class="block mt-3">
                <div class="is-size-6 has-text-grey">{post.date}</div>
                <div class="is-size-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
              </div>
            ))}

            {pagination.total > 1 && (
              <div class="buttons has-addons is-centered">
                <div class="button" disabled>
                  Previous
                </div>
                {pagination.total > 1 && (
                  <Link href={`blog/page/2`}>
                    <div class="button">Next</div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = listPosts(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
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
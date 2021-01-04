import { NextSeo } from "next-seo";
import Link from "next/link";
import { listPosts, countPosts } from "../../lib/posts";
import config from "../../cms/site-settings.json";
import { listTags } from "../../lib/postTags";
import BlogList from "../../components/BlogList";
import BlogTags from "../../components/BlogTags";

export default function Blogs({ posts, tags, pagination }) {
  return (
    <>
      <NextSeo title="Blog" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Blog</h2>
            <BlogTags tags={tags} />
            <hr class="mt-0" />

            <BlogList posts={posts} />

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

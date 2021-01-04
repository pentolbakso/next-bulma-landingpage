import { NextSeo } from "next-seo";
import Link from "next/link";
import { listPosts, countPosts } from "../../../lib/posts";
import config from "../../../cms/site-settings.json";
import { listTags } from "../../../lib/postTags";
import BlogList from "../../../components/BlogList";
import BlogTags from "../../../components/BlogTags";

export default function Page({ posts, tags, pagination }) {
  return (
    <>
      <NextSeo title={`Blog Page ${pagination.current}`} />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Blog - Page {pagination.current}</h2>
            <BlogTags tags={tags} />
            <hr class="mt-0" />

            <BlogList posts={posts} />

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

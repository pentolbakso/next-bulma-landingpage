import { NextSeo } from "next-seo";
import Link from "next/link";
import { countPosts, listPosts } from "../../../lib/posts";
import config from "../../../cms/site-settings.json";
import { getTag, listTags } from "../../../lib/postTags";
import dayjs from "dayjs";

export default function Tag({ posts, tag, pagination, page }) {
  return (
    <>
      <NextSeo title={`Blog posts tagged with ${tag.name}`} />

      <main>
        <section class="section is-small">
          <div class="container">
            <Link href="/blog" passHref>
              <a class="has-text-weight-bold">&#x2190; Blog</a>
            </Link>
            <h2 class="is-size-3">
              Blog posts tagged with <em>{tag.name}</em>
            </h2>
            <hr class="mt-2" />

            {posts.map((post) => (
              <div class="block mt-3">
                <div class="is-size-7 has-text-grey">
                  {dayjs(post.date).format("DD MMM YYYY")}
                </div>
                <div class="is-size-4">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
              </div>
            ))}

            {pagination.total > 1 && (
              <div class="buttons has-addons is-centered">
                {pagination.current == 1 ? (
                  <div class="button" disabled>
                    Previous
                  </div>
                ) : (
                  <Link
                    href={
                      pagination.current == 2
                        ? `/blog/tag/${tag.slug}`
                        : `/blog/tag/${tag.slug}/${
                            parseInt(pagination.current) - 1
                          }`
                    }
                  >
                    <div class="button">Previous</div>
                  </Link>
                )}
                {pagination.current < pagination.total && (
                  <Link
                    href={`/blog/tag/${tag.slug}/${
                      parseInt(pagination.current) + 1
                    }`}
                  >
                    <div class="button">Next</div>
                  </Link>
                )}
                {pagination.current == pagination.total && (
                  <div class="button" disabled>
                    Next
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const queries = params.slug;
  const [slug, page] = [queries[0], queries[1]];
  const posts = listPosts(
    page ? parseInt(page) : 1,
    config.posts_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page) : 1,
    total: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  const props = { posts, tag, pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};

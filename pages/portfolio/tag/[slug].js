import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { listPortfolios } from "../../../lib/portfolios";
import { getTag, listTags } from "../../../lib/portfolioTags";

export default function Tag({ portfolios, tag }) {
  return (
    <>
      <NextSeo title={`Portfolio ${tag.name}`} />

      <main>
        <section class="section is-small">
          <div class="container">
            <Link href="/portfolio" passHref>
              <a class="has-text-weight-bold">&#x2190; Portfolios</a>
            </Link>
            <h2 class="is-size-3">
              Portfolio tagged with <em>{tag.name}</em>
            </h2>

            <div class="columns is-multiline mt-3">
              {portfolios.map((it) => (
                <div class="column is-3">
                  <div class="card">
                    <div class="card-image">
                      <Image
                        src={it.image}
                        alt="web studio"
                        layout="responsive"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div class="card-content">
                      <h3 class="is-size-4">
                        <Link href={`/portfolio/${it.slug}`} passHref>
                          <a>{it.title}</a>
                        </Link>
                      </h3>
                      <div class="tags mt-1">
                        {it.tags.map((tag) => (
                          <Link href={`/portfolio/tag/${tag}`} passHref>
                            <a class="tag is-grey">{tag}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const portfolios = listPortfolios(slug);
  const tag = getTag(slug);
  return { props: { portfolios, tag } };
};

export const getStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    return {
      params: { slug: tag.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

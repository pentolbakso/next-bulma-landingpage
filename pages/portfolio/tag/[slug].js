import { NextSeo } from "next-seo";
import Link from "next/link";
import { listPortfolios } from "../../../lib/portfolios";
import { getTag, listTags } from "../../../lib/portfolioTags";
import PortfolioList from "../../../components/PortfolioList";

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

            <PortfolioList portfolios={portfolios} />
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

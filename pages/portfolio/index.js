import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { listPortfolios } from "../../lib/portfolios";
import { listTags } from "../../lib/portfolioTags";
import PortfolioList from "../../components/PortfolioList";

export default function Portolios({ portfolios, tags }) {
  return (
    <>
      <NextSeo title="Our Portfolios" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Our Portfolios</h2>
            <PortfolioList portfolios={portfolios} />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const portfolios = listPortfolios();
  const tags = listTags();
  return {
    props: {
      portfolios,
      tags,
    },
  };
}

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { listPortfolios } from "../../lib/portfolios";
import { listTags } from "../../lib/portfolioTags";

export default function Portolios({ portfolios, tags }) {
  return (
    <>
      <NextSeo title="Our Portfolios" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Our Portfolios</h2>

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
                      <h3 class="is-size-4">{it.title}</h3>
                      <div class="tags">
                        {it.tags.map((tag) => (
                          <Link href={`/portfolio/tag/${tag}`} passHref>
                            <a class="tag is-info is-light">{tag}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div class="column is-3">
                <div class="card">
                  <div class="card-content">
                    <div class="has-text-centered">
                      <p>Build your own product now! Just drop us a call</p>
                      <br />
                      <Link href="/contact">
                        <a class="button is-primary">Contact Us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

const porfolios = [
  {
    title: "Website A",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
    image: "/images/day94-ui-ux.png",
    url: "http://www.google.com",
  },
  {
    title: "Website B",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
    image: "/images/day94-ui-ux.png",
    url: "http://www.google.com",
  },
  {
    title: "App C",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
    image: "/images/day94-ui-ux.png",
  },
  {
    title: "App D",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
    image: "/images/day94-ui-ux.png",
    url: "http://www.google.com",
  },
];

export default function Portfolio() {
  return (
    <>
      <NextSeo title="Portfolio" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-4">Portfolio</h2>
            <br />
            <div class="columns is-multiline">
              {porfolios.map((p) => (
                <div class="column is-4">
                  <div class="card">
                    <div class="card-image">
                      <Image
                        src="/images/day94-ui-ux.png"
                        alt="web studio"
                        layout="responsive"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div class="card-content">
                      <h3 class="is-size-5">{p.title}</h3>
                      <p>{p.description}</p>
                      {p.url && (
                        <a href={p.url} target="_blank">
                          Link &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div class="column is-4">
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

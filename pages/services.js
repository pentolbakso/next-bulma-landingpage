import { NextSeo } from "next-seo";
import Image from "next/image";

export default function OurServices() {
  return (
    <>
      <NextSeo title="Our Services" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-3">Our Services</h2>
            <div class="has-text-centered">
              <Image
                src="/images/118-macbook.png"
                alt="web studio"
                layout="intrinsic"
                width={400}
                height={400}
              />
            </div>
            <p class="content">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

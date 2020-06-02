import Link from "next/link";
import { NextSeo } from "next-seo";

const Feature = ({
  title,
  description,
  image,
  isImageLeft,
  width = 400,
  height = 250,
}) => (
  <div class="columns is-vcentered">
    <div class="column has-text-centered">
      {isImageLeft ? (
        <img src={image} style={{ objectFit: "cover", width, height }} />
      ) : (
        <div>
          <h1 class="title">{title}</h1>
          <h2 class="subtitle">{description}</h2>
        </div>
      )}
    </div>
    <div class="column has-text-centered">
      {!isImageLeft ? (
        <img src={image} style={{ objectFit: "cover", width, height }} />
      ) : (
        <div>
          <h1 class="title">{title}</h1>
          <h2 class="subtitle">{description}</h2>
        </div>
      )}
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <NextSeo title="Web & Mobile App Development" />

      <main>
        {/* hero */}
        <section class="hero is-primary is-small">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column">
                  <p class="title">Web Dev Ninjas</p>
                  <h2 class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </h2>
                  <Link href="/contact">
                    <a class="button is-primary is-inverted is-medium">
                      <span class="icon is-small">
                        <i class="far fa-envelope"></i>
                      </span>
                      <span>Contact Us</span>
                    </a>
                  </Link>
                </div>
                <div class="column">
                  <img
                    src="/images/day94-ui-ux.png"
                    alt="web studio"
                    style={{ objectFit: "cover", width: 500, height: 300 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services */}
        <section class="section is-small">
          <div class="container">
            <Feature
              title="Sophisticated"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua"
              image="/images/day93-programing.png"
              isImageLeft={true}
            />
            <Feature
              title="Friendly"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua"
              image="/images/day92-freelancing.png"
              isImageLeft={false}
            />
            <Feature
              title="Modern"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua"
              image="/images/112-installing.png"
              isImageLeft={true}
            />
          </div>
        </section>
        {/* call to action */}
        <section class="section is-small has-background-white-ter">
          <div class="container has-text-centered">
            <h1 class="title">Ready for awesomeness?</h1>
            <h2 class="subtitle">
              Contact us for custom web & mobile app development
            </h2>
            <Link href="/contact">
              <a class="button is-primary is-large">
                <span class="icon is-small">
                  <i class="far fa-envelope"></i>
                </span>
                <span>Contact Us</span>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

import Link from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import config from "../cms/site-settings.json";

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
        <Image src={image} width={width} height={height} layout="intrinsic" />
      ) : (
        <div>
          <h1 class="title">{title}</h1>
          <h2 class="subtitle">{description}</h2>
        </div>
      )}
    </div>
    <div class="column has-text-centered">
      {!isImageLeft ? (
        <Image src={image} width={width} height={height} layout="intrinsic" />
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
      <NextSeo
        title={config.site_title}
        description={config.site_description}
      />

      <main>
        {/* hero */}
        <section class="hero is-primary is-fullheight">
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
                  <Image
                    src="/images/day94-ui-ux.png"
                    alt="web studio"
                    layout="responsive"
                    width={200}
                    height={200}
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
              width={300}
              height={300}
            />
            <Feature
              title="Friendly"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua"
              image="/images/day92-freelancing.png"
              isImageLeft={false}
              width={300}
              height={300}
            />
            <Feature
              title="Modern"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua"
              image="/images/112-installing.png"
              isImageLeft={true}
              width={300}
              height={300}
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

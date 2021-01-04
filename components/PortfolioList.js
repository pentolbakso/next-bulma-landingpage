import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioList = ({ portfolios }) => {
  return (
    <div class="columns is-multiline mt-3">
      {portfolios.map((it, idx) => (
        <div class="column is-3" key={idx}>
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
                {it.tags.map((tag, idx) => (
                  <Link href={`/portfolio/tag/${tag}`} key={idx} passHref>
                    <a class="tag is-grey">{tag}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;

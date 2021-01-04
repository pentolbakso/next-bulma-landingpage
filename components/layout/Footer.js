import React from "react";
import Link from "next/link";
import config from "../../cms/site-settings.json";

const Footer = (props) => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-half">© 2020 {config.site_title}</div>
          <div class="column">
            <aside class="menu">
              <p class="menu-label">Navigation</p>
              <ul class="menu-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Our Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <aside class="menu">
              <p class="menu-label">About</p>
              <ul class="menu-list">
                <li>
                  <Link href="/tos">Terms Of Services</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <aside class="menu">
              <p class="menu-label">Social</p>
              <ul class="menu-list">
                {config.facebook_account && (
                  <li>
                    <a
                      href={`https://facebook.com/${config.facebook_account}`}
                      target="_blank"
                    >
                      <span class="icon">
                        <i class="fab fa-facebook"></i>
                      </span>
                      <span>Facebook</span>
                    </a>
                  </li>
                )}
                {config.instagram_account && (
                  <li>
                    <a
                      href={`https://instagram.com/${config.instagram_account}`}
                      target="_blank"
                    >
                      <span class="icon">
                        <i class="fab fa-instagram"></i>
                      </span>
                      <span>Instagram</span>
                    </a>
                  </li>
                )}
                {config.twitter_account && (
                  <li>
                    <a
                      href={`https://twitter.com/${config.twitter_account}`}
                      target="_blank"
                    >
                      <span class="icon">
                        <i class="fab fa-twitter"></i>
                      </span>
                      <span>Twitter</span>
                    </a>
                  </li>
                )}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-half">© 2020 Awesomesauce Studio</div>
          <div class="column">
            <aside class="menu">
              <p class="menu-label">Navigation</p>
              <ul class="menu-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
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
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fab fa-instagram"></i>
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>Twitter</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

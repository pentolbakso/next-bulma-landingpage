import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <Link href="/">
            <a class="navbar-item">
              <h1 class="has-text-weight-semibold">Awesomesauce Studio</h1>
            </a>
          </Link>
          <a
            class={`navbar-burger burger ${menuVisible ? ` is-active` : ``}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div class={`navbar-menu ${menuVisible ? ` is-active` : ``}`}>
          <div class="navbar-end">
            <Link href="/">
              <a class="navbar-item">Home</a>
            </Link>
            <Link href="/blog">
              <a class="navbar-item">Blog</a>
            </Link>
            <Link href="/services">
              <a class="navbar-item">Our Services</a>
            </Link>
            <Link href="/portfolio">
              <a class="navbar-item">Portfolio</a>
            </Link>
            <span class="navbar-item">
              <Link href="/contact">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span>Contact Us</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

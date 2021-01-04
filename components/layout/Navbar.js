import React, { useState } from "react";
import Link from "next/link";
import config from "../../cms/site-settings.json";
import NavLink from "./NavLink";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <Link href="/" passHref>
            <a class="navbar-item">
              <h1 class="has-text-weight-semibold">{config.site_title}</h1>
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
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/services">Our Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/contact">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="far fa-envelope"></i>
                </span>
                <span>Contact Us</span>
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

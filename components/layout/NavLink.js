import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
  const router = useRouter();
  const basePath = "/" + router.pathname.split("/")[1];
  return (
    <Link href={href} passHref>
      <a
        class={`navbar-item ${href == basePath ? "has-text-weight-bold" : ""}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

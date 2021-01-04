import React from "react";
import "../styles/global.scss";
import Router from "next/router";
import NProgress from "nprogress";
import App from "next/app";
import { DefaultSeo } from "next-seo";

import "../static/css/nprogress.css";
import SiteLayout from "../components/layout/SiteLayout";
import * as gtag from "../lib/analytics";
import config from "../cms/site-settings.json";

// show progress on route changes
NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = (url) => {
  NProgress.done();
  gtag.pageview(url);
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_EN",
            url: config.base_url,
            site_name: config.site_title,
          }}
          titleTemplate={`%s | ${config.site_title}`}
        />
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </>
    );
  }
}

export default MyApp;

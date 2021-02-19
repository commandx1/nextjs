import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import App from "next/app";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/nav.scss";
import "./index.scss";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Nav />
        <div className="container containerWrapper py-5">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  }
}

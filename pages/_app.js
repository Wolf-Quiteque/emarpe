import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/layout/layout";
import $ from "jquery";
import { useRef, useContext, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const element = document.querySelector("body");
    element.classList.add(
      "hold-transition",
      "sidebar-mini",
      "layout-fixed",
      "sidebar-collapse"
    );
  }, []);
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="plugin/fontawesome-free/css/all.min.css" />
        <link
          rel="stylesheet"
          href="plugin/datatables-bs4/css/dataTables.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="plugin/datatables-responsive/css/responsive.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="plugin/datatables-buttons/css/buttons.bootstrap4.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css"
          rel="stylesheet"
        />
        <link href="dist/css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="dist/css/adminlte.min.css" />
        <script src="plugin/jquery/jquery.min.js"></script>
        <script src="plugin/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="dist/js/adminlte.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

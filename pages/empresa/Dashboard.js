import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard({ empresa }) {
  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Dashboard {empresa && empresa.nome}</h3>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-graph"></i>
              </span>

              <div
                className="info-box-content"
                style={{ height: "300px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-graph"></i>
              </span>

              <div
                className="info-box-content"
                style={{ height: "300px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-graph"></i>
              </span>

              <div
                className="info-box-content"
                style={{ height: "300px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-graph"></i>
              </span>

              <div
                className="info-box-content"
                style={{ height: "300px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-12 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-graph"></i>
              </span>

              <div
                className="info-box-content"
                style={{ height: "300px" }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import { ObjectId } from "bson";

import Link from "next/link";
import BarChart from "../../components/recharts/Barchart";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard({ empresa }) {
  const [indicador_mensal_1, setindicador_mensal_1] = useState();

  const getIndicadores = async () => {
    const res = await fetch("/api/empresa/indicadores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_empresa: empresa && new ObjectId(empresa._id),
        mes: "fevereiro",
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  getIndicadores();

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
            <div className="card">
              <div className="card-header">
                <div className="card-title">Indicador Mensal</div>
              </div>
              <div className="card-body">
                <BarChart data={indicador_mensal_1} />
              </div>
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

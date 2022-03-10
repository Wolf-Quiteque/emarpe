import Head from "next/head";
import { ObjectId } from "bson";

import Link from "next/link";
import BarChart from "../../components/recharts/Barchart";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Demostracao({ empresa }) {
  const [indicador_mensal_1, setindicador_mensal_1] = useState();

  return (
    <div className="container">
      <Head>
        <title>Demostração</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Demostração {empresa && empresa.nome}</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

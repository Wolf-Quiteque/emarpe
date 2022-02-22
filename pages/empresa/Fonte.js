import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Fonte() {
  const [ExcelFile, setExcelfile] = useState();

  return (
    <div className="container">
      <Head>
        <title>Fonte de Dados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Fone de Dados</h3>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <h5>Importar dados</h5>
                </div>
              </div>

              <div className="card-body">
                <div className="col-md-12 mt-5">
                  <label>Ano</label>
                  <select className="form-control">
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                </div>
                <div className="col-md-12 mt-4 container text-center">
                  {ExcelFile && (
                    <>
                      <div>
                        <span class="badge bg-warning text-white  mt-5">
                          <h5> {ExcelFile.name.substring(0, 25) + "..."}</h5>
                        </span>
                      </div>
                      <button
                        className="btn btn-sm btn-danger mt-3"
                        onClick={() => {
                          setExcelfile(null);
                        }}
                      >
                        Cancela
                      </button>
                    </>
                  )}
                  <div id="upload-card" className="text-center">
                    {ExcelFile ? (
                      ""
                    ) : (
                      <label htmlFor="ExcelFile" style={{ width: "100%" }}>
                        <div id="upload-card-body">
                          <div id="icon">
                            <i class="fas fa-file-upload"></i>
                          </div>
                          <div id="text">
                            Carregar ficheiro <span id="excel">EXCEL</span>
                          </div>
                        </div>{" "}
                        <input
                          type="file"
                          id="ExcelFile"
                          accept=".xlsx,.xls,.csv"
                          onChange={(e) => setExcelfile(e.target.files[0])}
                          style={{ display: "none" }}
                        />{" "}
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                {ExcelFile ? (
                  <button className="btn btn-info col-12">Importar</button>
                ) : (
                  <button className="btn btn-info col-12" disabled>
                    Importar
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Jan 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Feb 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Mar 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Abr 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Mai 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card fonte-dados">
                  <div className="card-header text-center">
                    <div className="card-title">
                      Jun 2022 <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

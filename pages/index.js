import Head from "next/head";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [empresas, setempresas] = useState();
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();

  const [Info, setInfo] = useState({});

  var pagesarray = [];

  const getEmpresa = async () => {
    const res = await fetch("/api/empresa/getempresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: page,
        info: Info,
      }),
    });
    const data = await res.json();
    setempresas(data.empresa);
    setnopages(data.pages);
    for (let index = 0; index < data.pages; index++) {
      var number = Number(index) + 1;
      pagesarray.push({ page: number });
    }
    setpages(pagesarray);
  };

  useEffect(() => {
    setempresas(null);
    getEmpresa();
  }, [page, Info]);

  const Prev = () => {
    if (page == 1) {
      return false;
    }
    setpage(Number(page) - 1);
  };

  const Next = () => {
    if (page == pages) {
      return false;
    }
    setpage(Number(page) + 1);
  };

  return (
    <div className="container">
      <Head>
        <title>Adimin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <h3 className="mt-3 mb-3">Carteira</h3>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="fas fa-chart-bar"></i>
              </span>

              <div className="info-box-content">
                <span className="info-box-text">Total Honorários</span>
                <span className="info-box-number">20%</span>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="progress-description">
                  Actual
                  <p>100.00 kz</p>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-user"></i>
              </span>

              <div className="info-box-content">
                <span className="info-box-text">Nº de Clientes</span>
                <span className="info-box-number">5</span>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="progress-description">
                  Clientes
                  <p>5</p>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-bookmark"></i>
              </span>

              <div className="info-box-content">
                <span className="info-box-text">Nº de Tickets</span>
                <span className="info-box-number">30%</span>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <span className="progress-description">
                  Tickets
                  <p>58</p>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box ">
              <span className="info-box-icon">
                <i className="far fa-shopping-cart"></i>
              </span>

              <div className="info-box-content">
                <span className="info-box-text">Entrega do mês</span>
                <span className="info-box-number">30%</span>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="progress-description">
                  Entregas
                  <p>80</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5" />
        <h3 className="mt-4">Empresas</h3>
        <div className="card mt-3">
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Empresa</th>
                  <th>Endereço</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {empresas ? (
                  empresas.map((e) => (
                    <tr>
                      <td>{e._id.substring(0, 9)}</td>
                      <td>{e.empresa}</td>
                      <td>{e.endereco}</td>
                      <td>{e.email}</td>
                    </tr>
                  ))
                ) : (
                  <div className="overlay mb-5 mt-5 text-center">
                    <i className="fas fa-2x fa-sync-alt fa-spin"></i>
                  </div>
                )}
              </tbody>
            </table>
          </div>
          <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
              <li className={`page-item  ${page == 1 ? "disabled" : ""}`}>
                <a
                  href="#"
                  className="page-link"
                  onClick={() => {
                    Prev(page);
                  }}
                >
                  Anterior
                </a>
              </li>

              {pages &&
                pages.map((n) => (
                  <li
                    className={`page-item  ${page == n.page ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      onClick={() => {
                        setpage(n.page);
                      }}
                      href="#"
                    >
                      {n.page}
                    </a>
                  </li>
                ))}

              <li className={`page-item  ${page == nopages ? "disabled" : ""}`}>
                <a
                  href="#"
                  className="page-link"
                  onClick={() => {
                    Next(page);
                  }}
                >
                  Proximo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

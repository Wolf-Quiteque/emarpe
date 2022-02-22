import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import makeid from "../lib/random";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  var toaststate;
  const router = useRouter();

  const [empresas, setempresas] = useState();
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();
  const [reload, setreload] = useState();

  const [nif, setnif] = useState();
  const [nomeEmpresa, setnomeEmpresa] = useState();
  const [segmento, setsegmento] = useState();
  const [gruposeg, setgruposeg] = useState("Comércio");
  const [regime, setregime] = useState("Lucro Real");
  const [categoria, setcategoria] = useState("A");

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
  }, [page, Info, reload]);

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

  const NovaEmpresa = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    const res = await fetch("/api/empresa/novaempresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nomeEmpresa,
        regime: regime,
        categoria: categoria,
        gruposeg: gruposeg,
        segmento: segmento,
        nif: nif,
        id_usuario: session.user.email,
      }),
    });

    if (res.status == 200) {
      toast.update(toaststate, {
        render: "Empresa Criado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } else {
      toast.update(toaststate, {
        render: result.error,
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }
    $(".value").val("");
    $("#novaempresa").modal("hide");
    setreload(makeid());
  };

  return (
    <div className="container">
      <Head>
        <title>Emarpe Accounting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
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
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-4">Empresas</h3>
            <button
              data-toggle="modal"
              data-target="#novaempresa"
              className="btn btn-sm btn-outline-success float-right"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>nif</th>
                  <th>Empresa</th>
                  <th>categoria</th>
                  <th>regime</th>
                </tr>
              </thead>
              <tbody>
                {empresas ? (
                  empresas.map((e) => (
                    <tr
                      className="dedo"
                      onClick={() => {
                        router.replace("/empresa/" + e._id);
                      }}
                    >
                      <td>{e.nif.substring(0, 9)}</td>
                      <td>{e.nome}</td>
                      <td>{e.categoria}</td>
                      <td>{e.regime}</td>
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
        <div
          className="modal fade"
          id="novaempresa"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Nova Empresa</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Nif</label>

                      <input
                        onChange={(e) => {
                          setnif(e.target.value);
                        }}
                        type="text"
                        className="form-control form-control-border value border-width-2"
                        placeholder="nif..."
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label>Nome Da Empresa</label>
                      <input
                        onChange={(e) => {
                          setnomeEmpresa(e.target.value);
                        }}
                        type="text"
                        className="form-control form-control-border value border-width-2"
                        placeholder="nome da empresa..."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Segmento</label>
                      <input
                        onChange={(e) => {
                          setsegmento(e.target.value);
                        }}
                        type="text"
                        className="form-control form-control-border value border-width-2"
                        placeholder="Segmento..."
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Grupo de segmento</label>
                      <select
                        className="form-control form-control-border value border-width-2"
                        onChange={(e) => {
                          setgruposeg(e.target.value);
                        }}
                      >
                        <option value="Comércio">Comércio</option>
                        <option value="Indústria">Indústria</option>
                        <option value="Serviço">Serviço</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Categoria</label>
                      <select
                        className="form-control form-control-border value border-width-2"
                        onChange={(e) => {
                          setcategoria(e.target.value);
                        }}
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Regime de Tributação</label>
                      <select
                        className="form-control form-control-border value border-width-2"
                        onChange={(e) => {
                          setregime(e.target.value);
                        }}
                      >
                        <option value="Simples Nacional">
                          Simples Nacional
                        </option>
                        <option value="Lucro Real">Lucro Real</option>
                        <option value="Lucro Presumido">Lucro Presumido</option>
                        <option value="Outra">Outra</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancela
                </button>
                {nomeEmpresa &&
                segmento &&
                categoria &&
                gruposeg &&
                regime &&
                nif ? (
                  <button
                    type="button"
                    onClick={() => {
                      NovaEmpresa();
                    }}
                    className="btn btn-success"
                  >
                    Criar
                  </button>
                ) : (
                  <button type="button" className="btn btn-success" disabled>
                    Criar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

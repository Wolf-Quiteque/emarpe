import Head from "next/head";
import dummydata from "../lib/dummydata.json";
import { useRef, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import makeid from "../lib/random";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

export default function Empresas() {
  const [empresas, setempresas] = useState();
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();
  const [Categoria, setCategoria] = useState();
  const [relaod, setrelaod] = useState();

  const [Info, setInfo] = useState();

  var toaststate;

  var pagesarray = [];

  const DeleteEmpresa = async (id) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    const res = await fetch("/api/empresa/eliminar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    toast.update(toaststate, {
      render: "Empresa Excluido com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setrelaod(makeid());
  };

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
    toast.update(toaststate, {
      isLoading: false,
      autoClose: 1,
    });
  };

  useEffect(() => {
    setempresas(null);
    getEmpresa();
  }, [page, Info, relaod]);

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
        <title>Empresas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <main>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "50px" }}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control value"
                id="floatingInput"
                placeholder="nome da empresa"
                onChange={(e) => {
                  setInfo({
                    nome: {
                      $regex: ".*" + e.target.value + ".",
                      $options: "i",
                    },
                  });
                  setpage(1);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          {empresas ? (
            empresas.map((empresa) => (
              <div className="col-md-4 mb-3">
                <div className="card ">
                  <div className="card-header">
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        DeleteEmpresa(empresa._id);
                      }}
                    >
                      <i className="bi bi-x-circle "> </i> Excluir
                    </a>
                    <a className="btn btn-info btn-sm float-right">
                      <i className="bi bi-pencil "> </i> Editar
                    </a>
                  </div>
                  <img
                    src={empresa.imgurl}
                    className="card-img-top"
                    alt="..."
                    height="235px"
                  />
                  <div
                    style={{
                      backgroundImage:
                        "url('assets/images/patterns/padraAzul2.jpg')",
                      width: "100%",
                      height: "20px",
                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">{empresa.nome}</h5>
                    <p className="card-text">
                      {empresa.descricao.substring(0, 100) + "...."}
                    </p>
                  </div>
                  <div className="card-footer first-footer">
                    <div className="row">
                      <div className="col-4">
                        <h6>
                          {" "}
                          <NumberFormat
                            value={empresa.acumulado ? empresa.acumulado : 0}
                            displayType={"text"}
                            thousandSeparator={true}
                            className="conta-dinheiro"
                            decimalSeparator={"."}
                          />
                        </h6>
                        <span>Acumulado</span>
                        <div className="line"></div>
                      </div>
                      <div className="col-4">
                        <h6>
                          {" "}
                          <NumberFormat
                            value={
                              empresa.investidores
                                ? empresa.investidores.length
                                : 0
                            }
                            displayType={"text"}
                            thousandSeparator={true}
                            className="conta-dinheiro"
                            decimalSeparator={"."}
                          />
                        </h6>
                        <span>Investidores</span>
                        <div className="line"></div>
                      </div>

                      <div className="col-4">
                        <h6>
                          <NumberFormat
                            value={empresa && empresa.investimento_min}
                            displayType={"text"}
                            thousandSeparator={true}
                            className="conta-dinheiro"
                            decimalSeparator={"."}
                          />
                        </h6>
                        <span>Inv. Min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="row">
                {dummydata.map((data) => (
                  <div className="col-md-4 mb-3">
                    <div className="card" aria-hidden="true">
                      <img
                        src="https://www.colorbook.io/imagecreator.php?hex=7c7d80&width=800&height=600"
                        className="card-img-top"
                        alt="..."
                        height="235px"
                      />
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-6"></span>
                          <span className="placeholder col-8"></span>
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary disabled placeholder col-6"
                        ></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}{" "}
          <div className="col-12 text-center mt-5">
            <nav aria-label="...">
              <ul className="pagination">
                <li className={`page-item  ${page == 1 ? "disabled" : ""}`}>
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => {
                      Prev(page);
                    }}
                  >
                    Previous
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

                <li
                  className={`page-item  ${page == nopages ? "disabled" : ""}`}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => {
                      Next(page);
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

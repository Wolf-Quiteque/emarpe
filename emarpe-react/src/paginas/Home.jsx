import { useContext, useRef, useEffect, useState } from "react";
import axios from "axios";
import Scatte from "../components/recharts/Scatte";

import AreChart from "../components/recharts/AreChart";

import LineH from "../components/recharts/LineH";
import "../estilos/home.css";

export default function Home() {
  //criar as referenças
  const nome = useRef();
  const email = useRef();
  const tel = useRef();
  //------------------------------------

  //usestate variaveis

  const [ficheiro, setficheiro] = useState(null);

  //-------------------

  //criar funcao para enviar para a base de dados
  const Enviar = async () => {
    if (ficheiro) {
      const data = new FormData();
      const fileName = Date.now() + ficheiro.name;
      data.append("file", ficheiro);
      data.append("name", fileName);
      try {
        const res = await axios.post("uploadexcel/informacoes", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //-----------------------------

  //funcao para mudar ficheiro

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="bi bi-bank2"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Empresas</span>

                    <span className="info-box-number">45</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-box mb-4">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fas fa-users"></i>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Clientes</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                </div>
              </div>
              <div
                className="
               col-md-4"
              >
                <div className="info-box mb-2">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Funcionarios</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Indicador Mensal</h5>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        ></div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <AreChart />
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Indicador TRIMESTRAL</h5>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        ></div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <LineH />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Indicador Anual</h5>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        ></div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <Scatte />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="car-d">
                  <div className="card-header">
                    <h5 className="card-title"> DEM</h5>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        ></div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div class="description-block border-right">
                      <span class="description-percentage text-warning">
                        <i class="fas fa-caret-left"></i> 0%
                      </span>
                      <h5 class="description-header">$10,390.90</h5>
                      <span class="description-text">TOTAL COST</span>

                      <div class="description-block border-right">
                        <span class="description-percentage text-warning">
                          <i class="fas fa-caret-left"></i> 0%
                        </span>
                        <h5 class="description-header">$10,390.90</h5>
                        <span class="description-text">TOTAL COST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer" style={{ marginBottom: "15px" }}>
              <div class="row">
                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-success">
                      <i class="fas fa-caret-up"></i> 17%
                    </span>
                    <h5 class="description-header">$35,210.43</h5>
                    <span class="description-text">TOTAL REVENUE</span>
                  </div>
                </div>

                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-warning">
                      <i class="fas fa-caret-left"></i> 0%
                    </span>
                    <h5 class="description-header">$10,390.90</h5>
                    <span class="description-text">TOTAL COST</span>
                  </div>
                </div>

                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-success">
                      <i class="fas fa-caret-up"></i> 20%
                    </span>
                    <h5 class="description-header">$24,813.53</h5>
                    <span class="description-text">TOTAL PROFIT</span>
                  </div>
                </div>

                <div class="col-sm-3 col-6">
                  <div class="description-block">
                    <span class="description-percentage text-danger">
                      <i class="fas fa-caret-down"></i> 18%
                    </span>
                    <h5 class="description-header">1200</h5>
                    <span class="description-text">GOAL COMPLETIONS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div class="card">
                  <div className="card-header">
                    <h3 className="card-title">Usuarios Cadastrados </h3>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-warning float-right">
                              234
                            </span>
                          </a>
                          <span className="product-description">Abril</span>
                        </div>
                      </li>

                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-info float-right">
                              2000
                            </span>
                          </a>
                          <span className="product-description">Maio</span>
                        </div>
                      </li>

                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-danger float-right">
                              300
                            </span>
                          </a>
                          <span className="product-description">JUNHO</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer text-center">
                    <a href="javascript:void(0)" className="uppercase">
                      View All Products
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div class="card">
                  <div className="card-header">
                    <h3 className="card-title">Empresas Cadastradas </h3>

                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-warning float-right">
                              S.D.A
                            </span>
                          </a>
                          <span className="product-description">EMPRESA</span>
                        </div>
                      </li>

                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-info float-right">
                              L.D.A
                            </span>
                          </a>
                          <span className="product-description">EMPRESA</span>
                        </div>
                      </li>

                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            <span className="badge badge-danger float-right">
                              EMARPE
                            </span>
                          </a>
                          <span className="product-description">EMPRESA</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer text-center">
                    <a href="javascript:void(0)" className="uppercase">
                      View All Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

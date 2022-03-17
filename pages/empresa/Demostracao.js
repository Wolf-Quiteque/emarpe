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
          <div className="col-md-40">
            <h3 className="mt-3 mb-3">Demostração {empresa && empresa.nome}</h3>

            <div className="card">
              <div className="card-header">
                {" "}
                <ul
                  className="nav nav-tabs"
                  id="custom-content-below-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="dre-tab"
                      data-toggle="pill"
                      href="#dre"
                      role="tab"
                      aria-controls="dre"
                      aria-selected="false"
                    >
                      <h4 className="mt-3 mb-3">DRE</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="balancete-tab"
                      data-toggle="pill"
                      href="#balancete"
                      role="tab"
                      aria-controls="balancete"
                      aria-selected="false"
                    >
                      <h4 className="mt-3 mb-3">Balancete</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="balanco-tab"
                      data-toggle="pill"
                      href="#balanco"
                      role="tab"
                      aria-controls="balanco"
                      aria-selected="false"
                    >
                      <h4 className="mt-3 mb-3">Balanço</h4>
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-40">
                    <div className="card-body">
                      <div className="tab-content">
                        {/* dr */}
                        <div
                          className="tab-pane fade"
                          id="dre"
                          role="tab"
                          aria-labelledby="custom-tabs-one-dre-tab"
                        >
                          <table
                            id="example2"
                            className="table table-bordered table-hover dataTable dtr-inline"
                            aria-describedby="example2_info"
                          >
                            <thead>
                              <tr>
                                <th scope="col">Designaçao</th>
                                <th scope="col">Notas</th>
                                <th scope="col">janeiro</th>
                                <th scope="col">Fevereiro</th>
                                <th scope="col">Março</th>
                                <th scope="col">Abril</th>
                                <th scope="col">Maio</th>
                                <th scope="col">Junho</th>
                                <th scope="col">julho</th>
                                <th scope="col">Agosto</th>
                                <th scope="col">Setembro</th>
                                <th scope="col">Outubro</th>
                                <th scope="col">Novembro </th>
                                <th scope="col">Dezembro</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>vendas </td>
                                <td>22</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Prestacao de servico </td>
                                <td>23</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>custos de mercadoria vendidas </td>
                                <td>24</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Margem bruta </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Outros proveitos operacionais </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Custos de Destribuicao </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>253543</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>{" "}
                              <tr>
                                <td> Custos Administrativos(Pessoal) </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>{" "}
                              <tr>
                                <td> Outros custos e Perdas Operacionais</td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados Operacionais EBITDA </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Amortizaçoes</td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados Operacionais EBIT </td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>31</td>
                                <td>24</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados de Filias e associadas </td>
                                <td>32</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados ñ Operacionais </td>
                                <td>24</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados antes de Imposto</td>
                                <td></td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Imposto sobre redimento(Provisional)</td>
                                <td>25</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  Resultados Liquidos das Actividades Correntes{" "}
                                </td>
                                <td>24</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados Extraordinarios </td>
                                <td>35</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Imposto sobre o Rendimento </td>
                                <td>34</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>Resultados Liquidos do exercicio </td>
                                <td>35</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* balancete*/}
                        <div
                          className="tab-pane fade "
                          id="balancete"
                          role="tab"
                          aria-labelledby="custom-tabs-one-balancete-tab"
                        >
                          <table
                            id="example2"
                            className="table table-bordered table-hover dataTable dtr-inline"
                            aria-describedby="example2_info"
                          >
                            <thead>
                              <tr>
                                <th scope="col">
                                  {" "}
                                  1 Meios Fixos e Investimentos
                                </th>

                                <th scope="col">janeiro</th>
                                <th scope="col">Fevereiro</th>
                                <th scope="col">Março</th>
                                <th scope="col">Abril</th>
                                <th scope="col">Maio</th>
                                <th scope="col">Junho</th>
                                <th scope="col">julho</th>
                                <th scope="col">Agosto</th>
                                <th scope="col">Setembro</th>
                                <th scope="col">Outubro</th>
                                <th scope="col">Novembro </th>
                                <th scope="col">Dezembro</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>11 Imobilizações corporias </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 12 Imobilizações Incorporais </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  13 invest. em subsidiarias e associadas{" "}
                                </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>13 Outros activos financeiros </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>14 imobilizações em curso </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 18 Amortizaçoes acumuladas </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>253543</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>{" "}
                              <tr>
                                <td> 2 EXISTENCIAS </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>{" "}
                              <tr>
                                <td> 21 Compras</td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 26 Mercadorias</td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>3 TERCEIROS </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 31 Clientes saldo devedor </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>31 Clientes saldo credor </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 32 Fornecedores saldo credor</td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>32 Fornecedores saldo devedor</td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>34 Estado saldo devedor </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 34Estado saldo credor </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  35 Entidades participantes e participadas SD{" "}
                                </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  {" "}
                                  35 Entidades participantes e participadas SC{" "}
                                </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 36 Pessoal saldo credor </td>

                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>36 Pessoal saldo devedor </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  37 Outros valores a rec. e a pag. saldo
                                  devedor{" "}
                                </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  37 Outros valores a rec. e a pag. saldo credor{" "}
                                </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>4 MEIOS MONETÁRIOS </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 42 depositos a prazo </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>43 depositos á ordem </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>45 Caixa </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>48 Conta Transitoria </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>5 CAPITAL E RESERVAS </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 51 Capital </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> 52 Acções </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>55 Reservas legais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>57 Reservas fins especias </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>6 PROVEITOS E GANHOS POR NATUREZA </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>61 Vendas </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>62 Prestacões de serviço </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>63 Outros proveiros operacionais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  66 Proveitos e ganhos financeiros gerais{" "}
                                </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  68 Outros proveitos e ganhos ñ operacionais{" "}
                                </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>7 CUSTOS E PERDAS POR NATUREZA </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>71 Custos das existencias vendidas </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>72 Custos com o pessoal </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>73 Amortizaçoes de exercicio </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>75 Outros Custos e perdas operacionais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>76 Custos e perdas financeiros gerais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>
                                  78 Outros custos e perdas ñ operacionais{" "}
                                </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>8 RESULTADOS </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> Resultados do ano </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td> Correções de erros fundamentais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>82 Resultados operacioanais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>83 Resultados financeiros </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>85 Resultados ñ operacionais </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>87 Imposto sobre lucros </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>88 Resultados liquidos do exercicio </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                              <tr>
                                <td>TOTAL </td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                                <td>75466785647</td>
                                <td>253543</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* balanco */}
                      <div
                        className="tab-pane fade "
                        id="balanco-tab"
                        role="tab"
                        aria-labelledby="custom-tabs-one-balanco-tab"
                      >
                        <table
                          id="example2"
                          className="table table-bordered table-hover dataTable dtr-inline"
                          aria-describedby="example2_info"
                        >
                          <thead>
                            <tr>
                              <th scope="col">Designaçao</th>
                              <th scope="col">Notas</th>
                              <th scope="col">janeiro</th>
                              <th scope="col">Fevereiro</th>
                              <th scope="col">Março</th>
                              <th scope="col">Abril</th>
                              <th scope="col">Maio</th>
                              <th scope="col">Junho</th>
                              <th scope="col">julho</th>
                              <th scope="col">Agosto</th>
                              <th scope="col">Setembro</th>
                              <th scope="col">Outubro</th>
                              <th scope="col">Novembro </th>
                              <th scope="col">Dezembro</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ACTIVOS Ñ CORRENTES </td>
                            </tr>
                            <tr>
                              <td> Imobilizações corporias </td>
                              <td>4</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Imobilizações Incorporais </td>
                              <td>5</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>
                                Investimentos em subsidiariase associadas{" "}
                              </td>
                              <td>6</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Outros activos financeiros </td>
                              <td>7</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>9 </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>253543</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>{" "}
                            <tr>
                              <td> ACTIVOS CORRENTES </td>
                              <td>8</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>{" "}
                            <tr>
                              <td> Existencias</td>
                              <td>9</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Contas a receber </td>
                              <td>10</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Disponibilidades </td>
                              <td>10</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Outros activos correntes </td>
                              <td>11</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>TOTAL DO ACTIVO </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> CAPITAL PROPIO E PASSIVO </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>CAPITAL PROPIO </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Capital </td>
                              <td>12</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Reservas </td>
                              <td>13</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Resultados transitados </td>
                              <td>14</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Resultados do exercicio </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> PASSIVO Ñ CORRENTE </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Emprestimos de medio e longo prazo </td>
                              <td>15</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Impostos deferidos </td>
                              <td>16</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Provisões para pensões </td>
                              <td>17</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Provisões para Outros riscos e encargos </td>
                              <td>18</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Outros passivos ñ correntes </td>
                              <td>19</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> PASSIVO CORRENTE </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>Contas a pagar </td>
                              <td>19</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Emprestimos de curto prazo </td>
                              <td>20</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                Parte cor.dos emp. a medio e longos prazos{" "}
                              </td>
                              <td>15</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> Outros passivos Correntes </td>
                              <td></td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                            <tr>
                              <td> TOTAL DO CAPITAL PROPIO E PASSIVO </td>
                              <td>21</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                              <td>75466785647</td>
                              <td>253543</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

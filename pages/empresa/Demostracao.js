import Head from "next/head";
import { ObjectId } from "bson";

import Link from "next/link";
import NumberFormat from "react-number-format";
import BarChart from "../../components/recharts/Barchart";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Demostracao({ empresa }) {
  const [dre, setdre] = useState();
  const [balanco, setbalanco] = useState();

  const getDRE = async () => {
    const res = await fetch("/api/empresa/getdre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_empresa: new ObjectId(empresa._id),
      }),
    });
    const data = await res.json();
    setdre(data);
  };

  const getBalanco = async () => {
    const res = await fetch("/api/empresa/getBalanco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_empresa: new ObjectId(empresa._id),
      }),
    });
    const data = await res.json();
    setbalanco(data);

    console.log(data);
  };

  useEffect(() => {
    getBalanco();
    getDRE();
  }, []);

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

            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-tabs">
                  <div className="card-header p-0 pt-1">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-one-tab"
                      role="tablist"
                    >
                      {" "}
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-one-balancete-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-balancete"
                          role="tab"
                          aria-controls="custom-tabs-one-balancete"
                          aria-selected="false"
                        >
                          Balancete
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-one-DRE-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-DRE"
                          role="tab"
                          aria-controls="custom-tabs-one-DRE"
                          aria-selected="true"
                        >
                          DRE
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-one-balanco-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-balanco"
                          role="tab"
                          aria-controls="custom-tabs-one-balanco"
                          aria-selected="false"
                        >
                          Balanco
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content "
                      id="custom-tabs-one-tabContent"
                    >
                      {" "}
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-one-balancete"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-balancete-tab"
                      ></div>
                      <div
                        className="tab-pane fade show active overflowing"
                        id="custom-tabs-one-DRE"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-DRE-tab"
                      >
                        <div className="row">
                          <div className="col-md-6" style={{ zIndex: 1000 }}>
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>
                                    <h5>Designação</h5>
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <th>
                                  <tr>
                                    <th>Vendas</th>
                                    <th>22</th>
                                  </tr>

                                  <tr>
                                    <th>Prestação de serviços</th>
                                    <th>23</th>
                                  </tr>

                                  <tr>
                                    <th>Total</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Custos das mercadorias vendidas</th>
                                    <th>24</th>
                                  </tr>

                                  <tr>
                                    <th>Margem Bruto</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Outros proveitos operacionasi</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Custos de distribuição</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Custos adiminstrativos (Pessoal)</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Outros custos e perdas operacionais</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Resultados operacionais (EBITDA)</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Amortizações</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Resultados operacionais(EBIT)</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Resultados Financeiros</th>
                                    <th>31</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados de filhas e associadas</th>
                                    <th>32</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados não operacionais</th>
                                    <th>33</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados antes de imposto</th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>
                                      Impostos sobre rendimentos (Provisional)
                                    </th>
                                    <th>35</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      Resultados Liquidos das actividades
                                      Correntes
                                    </th>
                                    <th></th>
                                  </tr>

                                  <tr>
                                    <th>Resultados Extraordinarios</th>
                                    <th>34</th>
                                  </tr>

                                  <tr>
                                    <th>Imposto sobre o Rendimento </th>
                                    <th>35</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados Liquido do exercicio</th>
                                    <th>34</th>
                                  </tr>
                                </th>
                              </tbody>
                            </table>
                          </div>

                          <div className="col-md-6 overflowing-left">
                            <table className="table table-hover ">
                              <thead>
                                <tr className="sticky">
                                  <th>
                                    <h5>Janeiro</h5>
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Fevereiro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Março</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Abril</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Maio</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Junho</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Julho</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Agosto</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Setembro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Outubro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Novembro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Dezembro</h5>{" "}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {dre &&
                                  dre.map((e) => (
                                    <>
                                      <th>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.vendas}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.prestacao_de_servico}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.total}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.custos_das_mercadorias_vendidas
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.margem_bruta}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_proveitos_operacionais
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.custos_de_distribuicao}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.custos_administrativos_pessoal
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_custos_e_perdas_operacionais
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_operacionais_ebitda
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.amortizacoes}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_operacionais_ebit
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.resultados_financeiros}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_de_filias_e_associados
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_nao_operacionas
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_antes_de_imposto
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.imposto_sobre_os_rendimentos_provisional
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_liquidos_das_actividades_correntes
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.reultados_extraordinario}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.imposto_sobre_rendimetno}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.resultados_liquido_do_exercicio
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                      </th>
                                    </>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade overflowing"
                        id="custom-tabs-one-balanco"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-balanco-tab"
                      >
                        <div className="row">
                          <div className="col-md-6" style={{ zIndex: 1000 }}>
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>
                                    <h5>Designação</h5>
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <th>
                                  <tr>
                                    <th>
                                      <strong>Activos não correntes</strong>
                                    </th>
                                  </tr>
                                  <tr>
                                    <th>Imobilizações Corporeas</th>
                                    <th>4</th>
                                  </tr>

                                  <tr>
                                    <th>Imobilizações Incorporeas</th>
                                    <th>5</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      Investimento Subsidiarias e associadas
                                    </th>
                                    <th>6</th>
                                  </tr>

                                  <tr>
                                    <th>Outros Activos Financeiros</th>
                                    <th>7</th>
                                  </tr>

                                  <tr>
                                    <th>Outros Activos não Correntes</th>
                                    <th>9</th>
                                  </tr>

                                  <tr>
                                    <th>Total do Activos não correntes</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>Activos Correntes</strong>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Existências</th>
                                    <th>8</th>
                                  </tr>

                                  <tr>
                                    <th>Contas a Receber</th>
                                    <th>9</th>
                                  </tr>

                                  <tr>
                                    <th>Disponibilidades</th>
                                    <th>10</th>
                                  </tr>

                                  <tr>
                                    <th>Outros Activos Correntes</th>
                                    <th>11</th>
                                  </tr>

                                  <tr>
                                    <th>Total do Activo correntes</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>Total do Activo</strong>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>
                                      {" "}
                                      <h5>CAPITAL PROPRIO E PASSIVO</h5>{" "}
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>Capital proprio</strong>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Capital</th>
                                    <th>12</th>
                                  </tr>

                                  <tr>
                                    <th>Reservas</th>
                                    <th>13</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados transitados</th>
                                    <th>14</th>
                                  </tr>

                                  <tr>
                                    <th>Resultados do Exercicio</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>Passivo não corrente</strong>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Emp. de medio e longo prazo</th>
                                    <th>15</th>
                                  </tr>

                                  <tr>
                                    <th>Impostos deferidos </th>
                                    <th>16</th>
                                  </tr>

                                  <tr>
                                    <th>Provisões para pensões</th>
                                    <th>17</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      Provisões para outros riscos e encargos
                                    </th>
                                    <th>18</th>
                                  </tr>

                                  <tr>
                                    <th>Outros passivos não Correntes</th>
                                    <th>19</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>Passivo correntes</strong>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Contas a Pagar</th>
                                    <th>19</th>
                                  </tr>

                                  <tr>
                                    <th>Emprestimo de Curto prazo</th>
                                    <th>20</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      Parte cor. dos emp. a medio e longo prazo
                                    </th>
                                    <th>15</th>
                                  </tr>

                                  <tr>
                                    <th>Outros passivos correntes</th>
                                    <th>21</th>
                                  </tr>

                                  <tr>
                                    <th>
                                      <strong>
                                        total do capital proprio e passivo
                                      </strong>
                                    </th>
                                  </tr>
                                </th>
                              </tbody>
                            </table>
                          </div>

                          <div className="col-md-6 overflowing-left">
                            <table className="table table-hover ">
                              <thead>
                                <tr className="sticky">
                                  <th>
                                    <h5>Janeiro</h5>
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Fevereiro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Março</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Abril</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Maio</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Junho</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Julho</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Agosto</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Setembro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Outubro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Novembro</h5>{" "}
                                  </th>
                                  <th>
                                    {" "}
                                    <h5>Dezembro</h5>{" "}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {balanco &&
                                  balanco.map((e) => (
                                    <>
                                      <th>
                                        <tr>
                                          <th>-</th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.imobilizacoes_corporeas}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.imobilizacoes_incorporeas
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.investimentos_em_subsidiarias
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_activos_financeiros
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_activos_nao_correntes
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <th>
                                          <NumberFormat
                                            value={e.total_activo_nao_correntes}
                                            thousandSeparator="."
                                            decimalSeparator=","
                                            displayType="text"
                                            decimalScale={2}
                                          />
                                        </th>
                                        <tr>
                                          <th>-</th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.existencias}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.contas_a_receber}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            {" "}
                                            <NumberFormat
                                              value={e.disponibilidades}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.outros_activos_correntes}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <th>
                                          <NumberFormat
                                            value={e.total_activo_nao_correntes}
                                            thousandSeparator="."
                                            decimalSeparator=","
                                            displayType="text"
                                            decimalScale={2}
                                          />
                                        </th>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                Number(
                                                  e.total_activos_correntes
                                                ) +
                                                Number(
                                                  e.total_activo_nao_correntes
                                                )
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <h5>-</h5>
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>-</th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.capital}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.reservas}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.resultados_transitados}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.resultados_de_exercicio}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>-</th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.emprestimo_de_medio_e_longo_prazo
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            {" "}
                                            <NumberFormat
                                              value={e.impostos_deferidos}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.provisoes_para_pensoes}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.provisoes_para_outros_riscos_encargos
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_passivos_nao_correntes
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>-</th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={e.contas_a_pagar}
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.emprestimo_de_curto_prazo
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>

                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.parte_cor_empr_media_longo_prazo
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.outros_passivos_correntes
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>
                                            <NumberFormat
                                              value={
                                                e.total_capital_poprio_e_passivo
                                              }
                                              thousandSeparator="."
                                              decimalSeparator=","
                                              displayType="text"
                                              decimalScale={2}
                                            />
                                          </th>
                                        </tr>
                                      </th>
                                    </>
                                  ))}
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
          </div>
        </div>
      </main>
    </div>
  );
}

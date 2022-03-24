import Head from "next/head";
import { ObjectId } from "bson";

import Link from "next/link";
import BarChart from "../../components/recharts/Barchart";
import BarChart2 from "../../components/recharts/Barchart2";
import BarChart3 from "../../components/recharts/Barchart3";
import BarChart4 from "../../components/recharts/Barchart4";
import BarChart5 from "../../components/recharts/Barchart5";
import BarChart7 from "../../components/recharts/Barchart7";

import LineChart from "../../components/recharts/LineChart";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NumberFormat from "react-number-format";

export default function Dashboard({ empresa }) {
  const [balanco, setbalanco] = useState();
  const [indicador_1_daddos, setindicador_1_daddos] = useState();
  const [indicador_2_daddos, setindicador_2_daddos] = useState();
  const [indicador_3_daddos, setindicador_3_daddos] = useState();
  const [indicador_4_daddos, setindicador_4_daddos] = useState();
  const [indicador_5_daddos, setindicador_5_daddos] = useState();
  const [indicador_6_daddos, setindicador_6_daddos] = useState();
  const [indicador_7_daddos, setindicador_7_daddos] = useState();

  const [dre, setdre] = useState();
  var indicardor_1 = [];
  var indicardor_2 = [];
  var indicardor_3 = [];
  var indicardor_4 = [];
  var indicardor_5 = [];
  var indicardor_6 = [];
  var indicardor_7 = [];

  const getData = async () => {
    const res2 = await fetch("/api/empresa/getdre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_empresa: new ObjectId(empresa._id),
      }),
    });
    const data2 = await res2.json();
    setdre(data2);

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

    indicardor_1.push(
      {
        name: "Janeiro",
        Investimento: Number(data[0].total_activo_nao_correntes),
        Vol_Negócio: Number(data2[0].vendas + data2[0].prestacao_de_servico),
        Fluxo_Caixa: Number(data[0].disponibilidades),
      },
      {
        name: "Fevereiro",
        Investimento: data[1].total_activo_nao_correntes,
        Vol_Negócio: Number(data2[1].vendas + data2[1].prestacao_de_servico),
        Fluxo_Caixa: Number(data[1].disponibilidades),
      }
    );
    setindicador_1_daddos(indicardor_1);

    //---------------------------------------------------------------------------

    indicardor_2.push(
      {
        name: "Janeiro",
        Financiamento: Number(data[0].total_capital_poprio_e_passivo),
        Resultados_Liquidos: Number(
          data2[0].resultados_liquidos_das_actividades_correntes
        ),
      },
      {
        name: "Fevereiro",
        Financiamento: data[1].total_activo_nao_correntes,
        Resultados_Liquidos: Number(
          data2[1].resultados_liquidos_das_actividades_correntes
        ),
      }
    );
    setindicador_2_daddos(indicardor_2);

    //---------------------------------------------------------------------------    /
    indicardor_3.push(
      {
        name: "Janeiro",
        Endividamento:
          (Number(
            data[0].total_passivo_nao_corrente + data[0].total_passivo_correntes
          ) /
            Number(data[0].total_activos)) *
          100,
        Solvabilidade:
          (Number(
            data[0].total_passivo_nao_corrente + data[0].total_passivo_correntes
          ) /
            Number(data[0].total_capital_propio)) *
          100,
        Auto_Financeira:
          Number(data[0].total_capital_propio / data[0].total_activos) * 100,
      },
      {
        name: "Fevereiro",
        Endividamento:
          (Number(
            data[1].total_passivo_nao_corrente + data[1].total_passivo_correntes
          ) /
            Number(data[1].total_activos)) *
          100,
        Solvabilidade:
          (Number(
            data[1].total_passivo_nao_corrente + data[1].total_passivo_correntes
          ) /
            Number(data[1].total_capital_propio)) *
          100,
        Auto_Financeira:
          Number(data[1].total_capital_propio / data[1].total_activos) * 100,
      }
    );
    setindicador_3_daddos(indicardor_3);

    //---------------------------------------------------------------------------

    indicardor_4.push(
      {
        name: "Janeiro",

        Liquidez_Geral:
          Number(
            data[0].total_activos_correntes / data[0].total_passivo_correntes
          ) * 100,

        Liquidez_Reduzida:
          (Number(data[0].total_activos_correntes - data[0].existencias) /
            Number(data[0].total_passivo_correntes)) *
          100,

        Liquidez_Imediata:
          Number(data[0].disponibilidades / data[0].total_passivo_correntes) *
          100,
      },
      {
        name: "Fevereiro",
        Liquidez_Geral:
          Number(
            data[1].total_activos_correntes / data[1].total_passivo_correntes
          ) * 100,

        Liquidez_Reduzida:
          (Number(data[1].total_activos_correntes - data[1].existencias) /
            Number(data[1].total_passivo_correntes)) *
          100,

        Liquidez_Imediata:
          Number(data[1].disponibilidades / data[1].total_passivo_correntes) *
          100,
      }
    );
    setindicador_4_daddos(indicardor_4);

    //---------------------------------------------------------------------------    /

    indicardor_5.push(
      {
        name: "Janeiro",

        Rend_Dos_CP:
          Number(
            data[0].resultados_de_exercicio / data[0].total_capital_propio
          ) * 100,

        Rend_Activos:
          Number(
            data2[0].resultados_operacionais_ebitda / data[0].total_activos
          ) * 100,

        Rend_Vendas:
          (Number(data2[0].resultados_operacionais_ebit) /
            Number(data2[0].vendas + data2[0].prestacao_de_servico)) *
          100,
      },
      {
        name: "Fevereiro",
        Rend_Dos_CP:
          Number(
            data[1].resultados_de_exercicio / data[1].total_capital_propio
          ) * 100,

        Rend_Activos:
          Number(
            data2[1].resultados_operacionais_ebitda / data[1].total_activos
          ) * 100,

        Rend_Vendas:
          (Number(data2[1].resultados_operacionais_ebit) /
            Number(data2[1].vendas + data2[1].prestacao_de_servico)) *
          100,
      }
    );
    setindicador_5_daddos(indicardor_5);

    //------------------------------------------------------------

    indicardor_6.push(
      {
        name: "Janeiro",

        Valor_Do_Capital: Number(data[0].total_capital_propio),

        Valor_Da_Firma:
          Number(
            data[0].total_passivo_nao_corrente + data[0].total_passivo_correntes
          ) - data[0].disponibilidades,
      },
      {
        name: "Fevereiro",
        Valor_Do_Capital: Number(data[1].total_capital_propio),

        Valor_Da_Firma:
          Number(
            data[1].total_passivo_nao_corrente + data[1].total_passivo_correntes
          ) - data[1].disponibilidades,
      }
    );
    setindicador_6_daddos(indicardor_6);

    indicardor_7.push(
      {
        name: "Janeiro",

        Lucro_Por_Ação: Number(data[0].total_capital_propio),

        Lucro_Por_Ação_Acumulada:
          Number(
            data[0].total_passivo_nao_corrente + data[0].total_passivo_correntes
          ) - data[0].disponibilidades,
      },
      {
        name: "Fevereiro",
        Lucro_Por_Ação: Number(data[1].total_capital_propio),

        Lucro_Por_Ação_Acumulada:
          Number(
            data[1].total_passivo_nao_corrente + data[1].total_passivo_correntes
          ) - data[1].disponibilidades,
      }
    );
    setindicador_7_daddos(indicardor_7);
  };

  useEffect(() => {
    getData();
  }, []);

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
                <div className="card-title">
                  Investimento / Volume de Negocio
                </div>
              </div>
              <div className="card-body">
                {indicador_1_daddos && <BarChart data={indicador_1_daddos} />}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Financiamento</div>
              </div>
              <div className="card-body">
                {indicador_2_daddos && <BarChart2 data={indicador_2_daddos} />}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  {" "}
                  End. / Solv. / Auto_Financeira
                </div>
              </div>
              <div className="card-body">
                {indicador_3_daddos && <BarChart3 data={indicador_3_daddos} />}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Liquidez</div>
              </div>
              <div className="card-body">
                {indicador_4_daddos && <BarChart4 data={indicador_4_daddos} />}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title"> Rendibilidades</div>
              </div>
              <div className="card-body">
                {indicador_5_daddos && <BarChart5 data={indicador_5_daddos} />}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title"> Valores</div>
              </div>
              <div className="card-body">
                {indicador_6_daddos && <LineChart data={indicador_6_daddos} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

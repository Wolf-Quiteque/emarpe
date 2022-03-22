import Head from "next/head";
import { ObjectId } from "bson";

import Link from "next/link";
import NumberFormat from "react-number-format";
import BarChart from "../../components/recharts/Barchart";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

export default function Demostracao({ empresa }) {
  var rowdre = [];
  var newrows = [];

  const [dre, setdre] = useState();

  const [rows, setRows] = useState([
    { designacao: "Vendas" },
    { designacao: "Prestação de serviços" },
    { designacao: "Total" },
    { designacao: "Custos das mercadorias vendidas" },
    { designacao: "Margem Bruto" },
    { designacao: "Outros proveitos operacionasi" },
    { designacao: "Custos de distribuição" },
    { designacao: "Custos adiminstrativos (Pessoal" },
    { designacao: "Outros custos e perdas operacionais" },
    { designacao: "Resultados operacionais (EBITDA)" },
    { designacao: "Amortizações" },
    { designacao: "Resultados operacionais(EBIT)" },
    { designacao: "Resultados Financeiros" },
    { designacao: "Resultados de filhas e associadas" },
    { designacao: "Resultados não operacionais" },
    { designacao: "Resultados antes de imposto" },
    { designacao: "Impostos sobre rendimentos (Provisional)" },
    { designacao: " Resultados Liquidos das actividadesCorrentes" },
    { designacao: "Resultados Extraordinarios" },
    { designacao: "Imposto sobre o Rendimento" },
    { designacao: "Resultados Liquido do exercicio" },
  ]);
  const [balanco, setbalanco] = useState();
  const columns = [
    {
      key: "designacao",
      name: "Designação",
      resizable: false,
      frozen: true,
      width: 300,
    },
    { key: "janeiro", name: "Janeiro", width: 200 },
    { key: "fevereiro", name: "Fevereiro", width: 200 },
    { key: "marco", name: "Março", width: 200 },
    { key: "abril", name: "Abril", width: 200 },
    { key: "maio", name: "Maio", width: 200 },
    { key: "junho", name: "Junho", width: 200 },
    { key: "julho", name: "Julho", width: 200 },
    { key: "agosto", name: "Agosto", width: 2100 },
    { key: "setembro", name: "Setembro", width: 2100 },
    { key: "outubro", name: "Outubro", width: 2100 },
    { key: "novembro", name: "Novembro", width: 200 },
    { key: "dezembro", name: "Dezembro", width: 2100 },
  ];

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
    var datalenght = Number(data.length) - 1;

    for (let index = 0; index < data.length; index++) {
      if (index == datalenght) {
        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Vendas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].vendas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Prestação de serviços",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].prestacao_de_servico}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "total",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "custos_das_mercadorias_vendidas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].custos_das_mercadorias_vendidas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "margem_bruta",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].margem_bruta}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "outros_proveitos_operacionais",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_proveitos_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "custos_de_distribuicao",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].custos_de_distribuicao}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "custos_administrativos_pessoal",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].custos_administrativos_pessoal}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "outros_custos_e_perdas_operacionais",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_custos_e_perdas_operacionais}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_operacionais_ebitda",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_operacionais_ebitda}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "amortizacoes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].amortizacoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_operacionais_ebit",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_operacionais_ebit}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_financeiros",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_de_filias_e_associados",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_de_filias_e_associados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_nao_operacionas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_nao_operacionas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_antes_de_imposto",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_antes_de_imposto}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "imposto_sobre_os_rendimentos_provisional",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].imposto_sobre_os_rendimentos_provisional}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_liquidos_das_actividades_correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_liquidos_das_actividades_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "reultados_extraordinario",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].reultados_extraordinario}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "imposto_sobre_rendimetno",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].imposto_sobre_rendimetno}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        newrows.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "resultados_liquido_do_exercicio",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_liquido_do_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------
      }
    }
    setRows(newrows);
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
                        className="tab-pane fade show active "
                        id="custom-tabs-one-DRE"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-DRE-tab"
                      >
                        <DataGrid
                          columns={columns}
                          rows={rows}
                          style={{
                            height: "650px",
                            fontSize: "16px",
                            width: "1100px",
                          }}
                        />
                      </div>
                      <div
                        className="tab-pane fade "
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

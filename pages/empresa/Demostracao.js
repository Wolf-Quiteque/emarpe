import Head from "next/head";
import { ObjectId } from "bson";
import dynamic from "next/dynamic";
import NumberFormat from "react-number-format";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-data-grid/dist/react-data-grid.css";
const DataGrid = dynamic(() => import("react-data-grid"), { ssr: false });

export default function Demostracao({ empresa }) {
  var balancorow = [];
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
  const [balancorows, setbalancorows] = useState([
    { designacao: "Activos Não Correntes" },
    { designacao: "Imobilizacoes Corporeas" },
    { designacao: "Imobilizacoes Incorporeas" },
    { designacao: "Investimentos em Subsidiarias" },
    { designacao: "Outros Activos Financeiros" },
    { designacao: "Outros Activos Nao Correntes" },
    { designacao: "Existencias" },
    { designacao: "Contas A Receber" },
    { designacao: "Disponibilidades" },
    { designacao: "Outros Activos Correntes" },
    { designacao: "Total activo" },
    { designacao: "Capital" },
    { designacao: "Reservas" },
    { designacao: "Resultados Transitados" },
    { designacao: "Resultados De Exercicio" },
    { designacao: "Emprestimo De Medio E Longo Prazo" },
    { designacao: "Impostos Deferidos" },
    { designacao: "Provisoes Para Pensoes" },
    { designacao: "Provisoes Para Outros Riscos Encargos" },
    { designacao: "Outros Passivos Nao Correntes" },
    { designacao: "Contas A Pagar" },
    { designacao: "Emprestimo De Curto Prazo" },
    { designacao: "Parte Cor Empr Media Longo Prazo" },
    { designacao: "Outros Passivos Correntes" },
    { designacao: "Total Capital Próprio E Passivo" },
  ]);

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
    { key: "agosto", name: "Agosto", width: 200 },
    { key: "setembro", name: "Setembro", width: 200 },
    { key: "outubro", name: "Outubro", width: 200 },
    { key: "novembro", name: "Novembro", width: 200 },
    { key: "dezembro", name: "Dezembro", width: 200 },
  ];

  const balancocolumns = [
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
    { key: "agosto", name: "Agosto", width: 200 },
    { key: "setembro", name: "Setembro", width: 200 },
    { key: "outubro", name: "Outubro", width: 200 },
    { key: "novembro", name: "Novembro", width: 200 },
    { key: "dezembro", name: "Dezembro", width: 200 },
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
          designacao: "Custos Das Mercadorias Vendidas",
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
          designacao: "Margem Bruta",
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
          designacao: "Outros Proveitos Operacionais",
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
          designacao: "Custos De Distribuicao",
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
          designacao: "Custos Administrativos Pessoal",
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
          designacao: "Outros Custos E Perdas Operacionais",
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
          designacao: "Resultados Operacionais Ebitda",
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
          designacao: "Amortizacoes",
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
          designacao: "Resultados Operacionais Ebit",
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
          designacao: "Resultados Financeiros",
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
          designacao: "Resultados De Filias E Associados",
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
          designacao: "Resultados Nao Operacionas",
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
          designacao: "Resultados Antes De Imposto",
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
          designacao: "Imposto Sobre Os Rendimentos Provisional",
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
          designacao: "Resultados Liquidos Das Actividades Correntes",
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
          designacao: "Reultados Extraordinario",
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
          designacao: "Imposto Sobre Rendimetno",
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
          designacao: "Resultados Liquido Do Exercicio",
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
    console.log(data);

    var datalenght = Number(data.length) - 1;

    for (let index = 0; index < data.length; index++) {
      if (index == datalenght) {
        balancorow.push({
          designacao: "Activos Não Correntes",
        });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Imobilizacoes Corporeas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].imobilizacoes_corporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Imobilizacoes Incorporeas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].imobilizacoes_incorporeas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Investimentos em Subsidiarias",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].investimentos_em_subsidiarias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Outros Activos Financeiros",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_activos_financeiros}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Outros Activos Nao Correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_activos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        balancorow.push({ designacao: " " });
        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Total Activos Nao Correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].total_activo_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        balancorow.push({ designacao: " " });

        balancorow.push({
          designacao: "Activos Correntes",
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Existencias",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].existencias}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Contas A Receber",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].contas_a_receber}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Disponibilidades",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].disponibilidades}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Outros Activos Correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_activos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------
        balancorow.push({ designacao: " " });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Total activo",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].total_activos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          designacao: " ",
        });

        balancorow.push({ designacao: "Capital Própio" });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Capital",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].capital}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Reservas",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].reservas}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Resultados Transitados",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_transitados}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Resultados De Exercicio",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].resultados_de_exercicio}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------
        balancorow.push({ designacao: "Passivo não Corrente" });
        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Emprestimo De Medio E Longo Prazo",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].emprestimo_de_medio_e_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Impostos Deferidos",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].impostos_deferidos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Provisoes Para Pensoes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].provisoes_para_pensoes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Provisoes Para Outros Riscos Encargos",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].provisoes_para_outros_riscos_encargos}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Outros Passivos Nao Correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_passivos_nao_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------
        balancorow.push({ designacao: "Passivo Corrente" });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Contas A Pagar",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].contas_a_pagar}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        //----------

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Emprestimo De Curto Prazo",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].emprestimo_de_curto_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Parte Cor Empr Media Longo Prazo",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].parte_cor_empr_media_longo_prazo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Outros Passivos Correntes",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].outros_passivos_correntes}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
        });
        balancorow.push({ designacao: " " });

        balancorow.push({
          janeiro: data[0] && (
            <NumberFormat
              value={data[0].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          designacao: "Total Capital Próprio E Passivo",
          fevereiro: data[1] && (
            <NumberFormat
              value={data[1].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),

          marco: data[2] && (
            <NumberFormat
              value={data[2].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          abril: data[3] && (
            <NumberFormat
              value={data[3].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          maio: data[4] && (
            <NumberFormat
              value={data[4].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          junho: data[5] && (
            <NumberFormat
              value={data[5].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          julho: data[6] && (
            <NumberFormat
              value={data[6].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          agosto: data[7] && (
            <NumberFormat
              value={data[7].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          setembro: data[8] && (
            <NumberFormat
              value={data[8].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          outubro: data[9] && (
            <NumberFormat
              value={data[9].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          novembro: data[10] && (
            <NumberFormat
              value={data[10].total_capital_poprio_e_passivo}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              decimalScale={2}
            />
          ),
          dezembro: data[11] && (
            <NumberFormat
              value={data[11].total_capital_poprio_e_passivo}
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
    setbalancorows(balancorow);
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
                        {rows && (
                          <DataGrid
                            columns={columns}
                            rows={rows}
                            style={{
                              height: "650px",
                              fontSize: "16px",
                              width: "1100px",
                            }}
                          />
                        )}
                      </div>
                      <div
                        className="tab-pane fade "
                        id="custom-tabs-one-balanco"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-balanco-tab"
                      >
                        {/* {balancorows && (
                          <DataGrid
                            columns={balancocolumns}
                            rows={balancorows}
                            style={{
                              height: "650px",
                              fontSize: "16px",
                              width: "1100px",
                            }}
                          />
                        )} */}
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

import Head from "next/head";
import Link from "next/link";
import makeid from "../../lib/random";
import { ObjectId } from "bson";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";

export default function Fonte({ empresa }) {
  var toaststate;
  var contador = 0;
  var balancete = {};
  var drmensal = {};
  var balancoarray = {};

  var j;
  const [reload, setreload] = useState();

  const [ExcelFile, setExcelfile] = useState();
  const [ExcelFileName, setExcelfileName] = useState();
  const [ano, setano] = useState();
  const [balancetemes, setbalancetemes] = useState();
  const [balanco, setbalanco] = useState();
  const [anoPesquisa, setanoPesquisa] = useState();

  const [demostracao_resultados, setdemostracao_resultados] = useState();

  const [mesbalancete, setmesbalancete] = useState();

  const [mes, setmes] = useState();

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setExcelfile(d);

      for (let index = 0; index < d.length; index++) {
        if (d[index].__EMPTY == "11 Imobilizações corpóreas") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["11_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["11_credito"] = Number(valores);
            }
            contador = contador + 1;
          }

          contador = 0;
        }
        //------------------------------------------------------

        if (d[index].__EMPTY == "14 Imobilizações em curso") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["14_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["14_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "18 Amortizações acumuladas") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["18_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["18_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "21 Compras") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["21_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["21_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "31 Clientes") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["31_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["31_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "32 Fornecedores") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["32_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["32_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "34 Estado") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["34_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["34_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "35 Entidades participantes e participadas") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["35_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["35_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "36 Pessoal") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["36_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["36_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "37 Outros valores a receber e a pagar") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["37_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["37_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "42 Depósitos a prazo") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["42_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["42_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "43 Depósitos á ordem") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["43_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["43_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }
        if (d[index].__EMPTY == "45 Caixa") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["45_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["45_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "48 Conta transitória") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["48_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["48_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "51 Capital") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["51_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["51_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "61 Vendas") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["61_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["61_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "62 Prestações de serviço") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["62_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["62_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "66 Proveitos e ganhos financeiros gerais") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["66_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["66_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (
          d[index].__EMPTY == "68 Outros proveitos e ganhos não operacionais"
        ) {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["68_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["68_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "72 Custos com o pessoal") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["72_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["72_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "75 Outros custos e perdas operacionais") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["75_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["75_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "76 Custos e perdas financeiros gerais") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["76_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["76_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "78 Outros custos e perdas não operacionais") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["78_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["78_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        if (d[index].__EMPTY == "81 Resultados transitados") {
          for (j in d[index]) {
            if (contador == 3) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["81_debito"] = Number(valores);
            }

            if (contador == 4) {
              var valores = d[index][j];

              for (let indexSub = 0; indexSub < valores.length; indexSub++) {
                valores = d[index][j]
                  .replace("Kz", "")
                  .replace(",", ".")
                  .replace(" ", "")
                  .replace(/\s/g, "");
              }

              balancete["81_credito"] = Number(valores);
            }
            contador = contador + 1;
          }
          contador = 0;
        }

        //--------------------------------------------------------
      }
      balancete["71_debito"] = 0;

      balancete["73_debito"] = 0;
      balancete["63_debito"] = 0;
      balancete["68_debito"] = 0;
      balancete["26_debito"] = 0;
      balancete["12_debito"] = 0;
      balancete["13_debito"] = 0;
      balancete["52_debito"] = 0;
      balancete["55_debito"] = 0;
      balancete["57_debito"] = 0;

      balancete["71_credito"] = 0;

      balancete["73_credito"] = 0;
      balancete["63_credito"] = 0;
      balancete["68_credito"] = 0;
      balancete["26_credito"] = 0;
      balancete["12_credito"] = 0;
      balancete["13_credito"] = 0;
      balancete["52_credito"] = 0;
      balancete["55_credito"] = 0;
      balancete["57_credito"] = 0;

      setbalancetemes(balancete);

      drmensal.vendas = Number(
        balancete["61_credito"] - balancete["61_debito"]
      );
      drmensal.prestacao_de_servico = Number(
        balancete["62_credito"] - balancete["62_debito"]
      );
      drmensal.total = Number(drmensal.prestacao_de_servico + drmensal.vendas);
      drmensal.custos_das_mercadorias_vendidas = Number(
        balancete["71_debito"] - balancete["71_credito"]
      );
      drmensal.margem_bruta =
        Number(
          drmensal.custos_das_mercadorias_vendidas +
            drmensal.prestacao_de_servico
        ) - Number(drmensal.custos_das_mercadorias_vendidas);
      drmensal.outros_proveitos_operacionais = Number(
        balancete["63_credito"] - balancete["63_debito"]
      );
      drmensal.custos_de_distribuicao = 0;
      drmensal.custos_administrativos_pessoal = Number(
        balancete["72_debito"] - balancete["72_credito"]
      );
      drmensal.outros_custos_e_perdas_operacionais = balancete["76_debito"];
      drmensal.resultados_operacionais_ebitda =
        Number(drmensal.margem_bruta) -
        Number(
          drmensal.outros_proveitos_operacionais +
            drmensal.custos_administrativos_pessoal +
            drmensal.custos_de_distribuicao
        ) +
        Number(balancete["75_debito"] - balancete["75_credito"]);

      drmensal.amortizacoes = Number(
        balancete["73_debito"] - balancete["73_credito"]
      );
      drmensal.resultados_operacionais_ebit = Number(
        drmensal.resultados_operacionais_ebitda - drmensal.amortizacoes
      );
      drmensal.resultados_financeiros =
        Number(balancete["66_credito"] - balancete["66_debito"]) -
        Number(balancete["76_debito"] - balancete["76_credito"]);

      drmensal.resultados_de_filias_e_associados = 0;

      drmensal.resultados_nao_operacionas =
        Number(balancete["68_credito"] - balancete["68_debito"]) -
        Number(balancete["78_debito"] - balancete["78_credito"]);

      drmensal.resultados_antes_de_imposto = Number(
        drmensal.resultados_financeiros +
          drmensal.resultados_nao_operacionas +
          drmensal.resultados_operacionais_ebit +
          drmensal.resultados_de_filias_e_associados
      );

      drmensal.imposto_sobre_os_rendimentos_provisional = 0;
      drmensal.resultados_liquidos_das_actividades_correntes = Number(
        drmensal.resultados_antes_de_imposto -
          drmensal.imposto_sobre_os_rendimentos_provisional
      );
      drmensal.reultados_extraordinario = 0;
      drmensal.imposto_sobre_rendimetno = 0;
      drmensal.resultados_liquido_do_exercicio =
        drmensal.resultados_liquidos_das_actividades_correntes;

      setdemostracao_resultados(drmensal);

      //------------------BALANÇO----------------------------------------------------
      // ACTIVO NAO CORRENTES
      balancoarray.imobilizacoes_corporeas =
        Number(
          balancete["11_debito"] -
            balancete["11_credito"] +
            (balancete["14_debito"] - balancete["14_credito"])
        ) - Number(balancete["18_debito"] - balancete["18_credito"]);

      balancoarray.imobilizacoes_incorporeas = Number(
        balancete["12_debito"] - balancete["12_credito"]
      );

      balancoarray.investimentos_em_subsidiarias = Number(
        balancete["13_debito"] - balancete["13_credito"]
      );

      balancoarray.outros_activos_financeiros =
        balancoarray.investimentos_em_subsidiarias;

      balancoarray.outros_activos_nao_correntes = 0;

      balancoarray.total_activo_nao_correntes = Number(
        balancoarray.imobilizacoes_corporeas +
          balancoarray.imobilizacoes_incorporeas +
          balancoarray.investimentos_em_subsidiarias +
          balancoarray.outros_activos_financeiros +
          balancoarray.outros_activos_nao_correntes
      );

      //ACTIVO CORRENTES
      balancoarray.existencias =
        Number(balancete["21_debito"] - balancete["21_credito"]) +
        Number(balancete["26_debito"] - balancete["26_credito"]);

      balancoarray.contas_a_receber = Number(
        balancete["31_debito"] +
          balancete["32_debito"] +
          balancete["34_debito"] +
          balancete["35_debito"] +
          balancete["36_debito"] +
          balancete["37_debito"]
      );

      balancoarray.disponibilidades =
        Number(balancete["42_debito"] - balancete["42_credito"]) +
        Number(balancete["43_debito"] - balancete["43_credito"]) +
        Number(balancete["45_debito"] - balancete["45_credito"]) +
        Number(balancete["48_debito"] - balancete["48_credito"]);

      balancoarray.outros_activos_correntes = 0;
      balancoarray.total_activos_correntes = Number(
        balancoarray.existencias +
          balancoarray.contas_a_receber +
          balancoarray.disponibilidades
      );

      //Capital Propio
      balancoarray.capital =
        Number(balancete["51_debito"] - balancete["51_credito"]) +
        Number(balancete["52_debito"] - balancete["52_credito"]);

      balancoarray.reservas = Number(
        balancete["55_debito"] + balancete["57_debito"]
      );
      Number(balancete["55_debito"] - balancete["55_credito"]) +
        Number(balancete["57_debito"] - balancete["57_credito"]);
      balancoarray.resultados_transitados = Number(balancete["81_debito"]);
      balancoarray.resultados_de_exercicio = 0;
      balancoarray.total_capital_propio = Number(
        balancoarray.capital +
          balancoarray.reservas +
          balancoarray.resultados_transitados +
          balancoarray.resultados_de_exercicio
      );

      //passivo nao corrente
      balancoarray.emprestimo_de_medio_e_longo_prazo = 0;
      balancoarray.impostos_deferidos = 0;
      balancoarray.provisoes_para_pensoes = 0;
      balancoarray.provisoes_para_outros_riscos_encargos = 0;
      balancoarray.outros_passivos_nao_correntes = 0;
      balancoarray.total_passivo_nao_corrente = 0;

      //passivo corrente
      balancoarray.contas_a_pagar = balancoarray.contas_a_receber = Number(
        balancete["31_credito"] +
          balancete["32_credito"] +
          balancete["34_credito"] +
          balancete["35_credito"] +
          balancete["36_credito"] +
          balancete["37_credito"]
      );
      balancoarray.emprestimo_de_curto_prazo = 0;
      balancoarray.parte_cor_empr_media_longo_prazo = 0;
      balancoarray.outros_passivos_correntes = 0;
      balancoarray.total_passivo_correntes = balancoarray.contas_a_receber;
      balancoarray.total_capital_poprio_e_passivo = Number(
        balancoarray.total_passivo_nao_corrente +
          balancoarray.total_capital_propio +
          balancoarray.total_passivo_correntes
      );

      setbalanco(balancoarray);
    });
  };

  const getbalancete = async () => {
    const res = await fetch("/api/empresa/balancete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ano: anoPesquisa,
        id_empresa: new ObjectId(empresa._id),
      }),
    });
    const data = await res.json();
    setmesbalancete(data);
  };

  useEffect(() => {
    getbalancete();
  }, [anoPesquisa, reload]);

  const Importar = async () => {
    // toaststate = toast.loading("aguarde...", { closeOnClick: true });

    balancete = balancetemes;
    balancete.id_empresa = empresa._id;
    balancete.mes = mes;
    balancete.ano = ano;
    setbalancetemes(balancete);
    const res = await fetch("/api/empresa/novobalancetemensal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(balancetemes),
    });

    if (res.status == 200) {
      drmensal["id_empresa"] = empresa._id;
      drmensal["mes"] = mes;
      drmensal["ano"] = ano;
      setdemostracao_resultados(drmensal);
      const res = await fetch("/api/empresa/novodemostracaomensal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(demostracao_resultados),
      });

      if (res.status == 200) {
        balancoarray["id_empresa"] = empresa._id;
        balancoarray["mes"] = mes;
        balancoarray["ano"] = ano;
        setbalanco(balancoarray);
        const res = await fetch("/api/empresa/novobalancomensal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(balanco),
        });
        if (res.status == 200) {
          toast.update(toaststate, {
            render: "Dados de" + mes && mes + " carregado",
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
      } else {
        toast.update(toaststate, {
          render: result.error,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 1300,
        });
      }
    } else {
      toast.update(toaststate, {
        render: result.error,
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }
    setExcelfile();
    setano();
    setmes();

    setreload(makeid());
  };

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
                <div className="row">
                  <div className="col-md-6 mt-5">
                    <label>Ano</label>
                    <select
                      onChange={(e) => {
                        setano(e.target.value);
                      }}
                      className="form-control"
                    >
                      <option></option>

                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                    </select>
                  </div>

                  <div className="col-md-6 mt-5">
                    <label>Mês</label>
                    <select
                      onChange={(e) => {
                        setmes(e.target.value);
                      }}
                      className="form-control"
                    >
                      <option></option>

                      <option>janeiro</option>
                      <option>fevereiro</option>
                      <option>março</option>
                      <option>abril</option>
                      <option>maio</option>
                      <option>junho</option>
                      <option>julho</option>
                      <option>agosto</option>
                      <option>setembro</option>
                      <option>outubro</option>
                      <option>novembro</option>
                      <option>dezembro</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12 mt-4 container text-center">
                  {ExcelFile && (
                    <>
                      <div>
                        <span class="badge bg-warning text-white  mt-5">
                          <h5> {ExcelFileName && ExcelFileName.name}</h5>
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
                          accept=".xlsx"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            readExcel(file);
                            setExcelfileName(e.target.files[0]);
                          }}
                          style={{ display: "none" }}
                        />{" "}
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                {ExcelFile && mes && ano ? (
                  <button
                    className="btn btn-info col-12"
                    onClick={() => {
                      Importar();
                    }}
                  >
                    Importar
                  </button>
                ) : (
                  <button className="btn btn-info col-12" disabled>
                    Importar
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col-md-12 mb-3">
              <label>Ano</label>
              <select
                onChange={(e) => {
                  setanoPesquisa(e.target.value);
                }}
                className="form-control"
              >
                <option></option>

                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
            </div>
            <div className="row">
              {anoPesquisa &&
                mesbalancete &&
                mesbalancete.map((bal) => (
                  <div className="col-md-4">
                    <div className="card fonte-dados">
                      <div className="card-header text-center">
                        <div className="card-title">
                          {bal.mes.substring(0, 3) + " " + anoPesquisa}{" "}
                          <i class="fas fa-check text-success"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

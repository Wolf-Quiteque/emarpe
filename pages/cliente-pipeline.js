import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Interweave from "interweave";

import Card from "../components/cliente/Card";

export default function Pipeline() {
  var toaststate;
  const [file, setFile] = useState(null);
  const [imgselected, setimgselected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientes, setclientes] = useState([]);
  const [clienteinfo, setclienteinfo] = useState([]);
  const [criarproposta, setcriarproposta] = useState(false);
  const [textareacontent, settextareacontent] = useState();

  const currentusername = useRef();
  const Tel = useRef();
  const email = useRef();
  const provincia = useRef();
  const municipio = useRef();
  const proffisao = useRef();
  const interesse = useRef();
  const proposta = useRef();
  const assunto = useRef();

  useEffect(() => {
    const changeimg = () => {
      if (file) {
        setimgselected(URL.createObjectURL(file));
      } else {
        setimgselected(null);
      }
    };
    changeimg();
  }, [file]);

  const QualificarCliente = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    setLoading(true);
    try {
      const res = await fetch("/api/cliente/updateEtapa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: clienteinfo._id,
          etapa: "qualificado",
        }),
      });
      toast.update(toaststate, {
        render: "Cadastrado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });

      setLoading(false);
    } catch (err) {
      toast.update(toaststate, {
        render: "acorreu um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setLoading(false);
    }
  };

  const RealizarCliente = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    setLoading(true);
    try {
      const res = await fetch("/api/cliente/updateEtapa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: clienteinfo._id,
          etapa: "realizado",
        }),
      });
      toast.update(toaststate, {
        render: "Cadastrado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });

      setLoading(false);
    } catch (err) {
      toast.update(toaststate, {
        render: "acorreu um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setLoading(false);
    }
  };

  const PropostaCliente = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    setLoading(true);
    try {
      const res = await fetch("/api/cliente/propostaCliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: clienteinfo._id,
          etapa: "proposta",
          assunto: assunto.current.value,
          mensagem: proposta.current.value,
        }),
      });
      toast.update(toaststate, {
        render: "Cadastrado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });

      setLoading(false);
    } catch (err) {
      toast.update(toaststate, {
        render: "acorreu um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const getClientes = async () => {
      try {
        const res = await fetch("/api/cliente/clientes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setclientes(data);
      } catch (err) {
        console.log(err);
      }
    };
    getClientes();
  }, [loading]);

  const NovoUser = async (e) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    setLoading(true);

    const formdata = new FormData();
    const fileName = Date.now() + file.name;
    formdata.append("file", file);
    formdata.append("name", fileName);
    formdata.append("upload_preset", "ipo-uploads");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: formdata,
      }
    ).then((r) => r.json());

    const userupdated = {
      nome: currentusername.current.value,
      Tel: Tel.current.value,
      email: email.current.value,
      provincia: provincia.current.value,
      municipio: municipio.current.value,
      proffisao: proffisao.current.value,
      interesse: interesse.current.value,
      imgurl: result.secure_url,
      etapa: "novo",
    };
    try {
      const res = await fetch("/api/cliente/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userupdated),
      });
      setLoading(false);
      currentusername.current.value = "";
      Tel.current.value = "";
      email.current.value = "";
      provincia.current.value = "";
      municipio.current.value = "";
      proffisao.current.value = "";
      interesse.current.value = 1;
      toast.update(toaststate, {
        render: "Cadastrado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setLoading(false);
    } catch (err) {
      toast.update(toaststate, {
        render: "acorreu um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Pipeline de Clientes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div>
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="col-md-4">
                <h3>Pipline</h3>
                <button
                  data-toggle="modal"
                  data-target="#novocliente"
                  className="btn btn-circle btn-primary"
                >
                  Criar
                </button>
              </div>
            </div>
            <div className="col-md-3 os-host-overflow os-host-overflow-y">
              <div className="progress-group">
                <h4>Novo </h4>

                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              {clientes &&
                clientes.map((n, i) =>
                  n.etapa == "novo" ? (
                    <Card
                      key={i}
                      class="callout-danger"
                      cliente={n}
                      onClick={(cliente) => {
                        setclienteinfo(cliente);
                        setcriarproposta(false);
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
            </div>

            <div className="col-md-3">
              <div className="progress-group">
                <h4>Qualificado</h4>

                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {clientes &&
                clientes.map((n, i) =>
                  n.etapa == "qualificado" ? (
                    <Card
                      key={i}
                      cliente={n}
                      class="callout-warning"
                      onClick={(cliente) => {
                        setclienteinfo(cliente);
                        setcriarproposta(false);
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
            </div>

            <div className="col-md-3">
              <div className="progress-group">
                <h4>Propostas</h4>

                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {clientes &&
                clientes.map((n, i) =>
                  n.etapa == "proposta" ? (
                    <Card
                      key={i}
                      class="callout-info"
                      cliente={n}
                      onClick={(cliente) => {
                        setclienteinfo(cliente);
                        setcriarproposta(false);
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
            </div>

            <div className="col-md-3">
              <div className="progress-group">
                <h4>Realizado</h4>

                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {clientes &&
                clientes.map((n, i) =>
                  n.etapa == "realizado" ? (
                    <Card
                      key={i}
                      class="callout-success"
                      cliente={n}
                      onClick={(cliente) => {
                        setclienteinfo(cliente);
                        setcriarproposta(false);
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
            </div>
          </div>
        </div>
        <div className="col-md-12"></div>

        <div className="modal fade" id="novocliente">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Cadastrar Novo Cliente</h4>
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
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Nome Completo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome do cliente"
                      ref={currentusername}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Nº Telefone</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+244"
                      ref={Tel}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="sucran@exemplo.com"
                      ref={email}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Profissão</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Doctor"
                      ref={proffisao}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="localidade" className="form-label">
                      Província
                    </label>
                    <select
                      name="localidade"
                      ref={provincia}
                      className="form-control"
                      id=""
                    >
                      <option value="Luanda">Luanda</option>
                      <option value="Bengo">Bengo</option>
                      <option value="Benguela">Benguela</option>
                      <option value="Bié">Bié</option>
                      <option value="Cabinda">Cabinda</option>
                      <option value="Cunene">Cunene</option>
                      <option value="Huambo">Huambo</option>
                      <option value="Huíla">Huíla</option>
                      <option value="Kuando Kubango">Kuando Kubango</option>
                      <option value="Kwanza Norte">Kwanza Norte</option>
                      <option value="Kwanza Sul">Kwanza Sul</option>
                      <option value="Lunda Norte">Lunda Norte</option>
                      <option value="Lunda Sul">Lunda Sul</option>
                      <option value="Malange">Malange</option>
                      <option value="Moxico">Moxico</option>
                      <option value="Namibe">Namibe</option>
                      <option value="Uíge">Uíge</option>
                      <option value="Zaire">Zaire</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="municioio" className="form-label">
                      Município <span className="text-danger">*</span>
                    </label>
                    <select
                      name="municipio"
                      ref={municipio}
                      className="form-control select2"
                      data-toggle="select2"
                    >
                      <optgroup label="Luanda">
                        <option value="Luanda">Luanda</option>
                        <option value="Belas">Belas</option>
                        <option value="Cacuaco">Cacuaco</option>
                        <option value="Cazenga">Cazenga</option>
                        <option value="Icolo e Bengo">Icolo e Bengo</option>
                        <option value="Quiçama">Quiçama</option>
                        <option value="Kilamba">Kilamba Kiaxi</option>
                        <option value="Talatona">Talatona</option>
                        <option value="Viana">Viana</option>
                      </optgroup>
                      <optgroup label="Bengo">
                        <option value="Ambriz">Ambriz</option>
                        <option value="Dande">Dande</option>
                        <option value="Dembos">Dembos</option>
                        <option value="Bula Atumba">Bula Atumba</option>
                        <option value="Nambuangongo">Nambuangongo</option>
                        <option value="Pango Aluquêm">Pango Aluquêm</option>
                      </optgroup>

                      <optgroup label="Benguela">
                        <option value="Benguela">Benguela</option>
                        <option value="Balombo">Balombo</option>
                        <option value="Baía Farta">Baía Farta</option>
                        <option value="Bocoio">Bocoio</option>
                        <option value="Caimbambo">Caimbambo</option>
                        <option value="Catumbela">Catumbela</option>
                        <option value="Chongoroi">Chongoroi</option>
                        <option value="Cubal">Cubal</option>
                        <option value="Bocoio">Bocoio</option>
                        <option value="Ganda">Ganda</option>
                        <option value="Lobito">Lobito</option>
                      </optgroup>

                      <optgroup label="Bié">
                        <option value="Andulo">Andulo</option>
                        <option value="Camacupa">Camacupa</option>
                        <option value="Catabola">Catabola</option>
                        <option value="Chinguar">Chinguar</option>
                        <option value="Chitembo">Chitembo</option>
                        <option value="Cuemba">Cuemba</option>
                        <option value="Cunhinga">Cunhinga</option>
                        <option value="Kuito">Kuito</option>
                        <option value="Nharea">Nharea</option>
                      </optgroup>

                      <optgroup label="Cabinda">
                        <option vlaue="Belize">Belize</option>
                        <option vlaue="Buco-Zau">Buco-Zau</option>
                        <option vlaue="Cabinda">Cabinda</option>
                        <option vlaue="Cacongo">Cacongo</option>
                      </optgroup>

                      <optgroup label="Cunene">
                        <option value="Cahama">Cahama</option>
                        <option value="Cuanhama">Cuanhama</option>
                        <option value="Curoca">Curoca</option>
                        <option value="Cuvelay">Cuvelay</option>
                        <option value="Namacunde">Namacunde</option>
                        <option value="Ombadja">Ombadja</option>
                      </optgroup>

                      <optgroup label="Cunene">
                        <option value="Bailundo">Bailundo</option>
                        <option value="Catchiungo">Catchiungo</option>
                        <option value="Caála">Caála</option>
                        <option value="Ekunha">Ekunha</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Londuimbale">Londuimbale</option>
                        <option value="Longongo">Longongo</option>
                        <option value="Mungo">Mungo</option>
                        <option value="Tchicala-Tcholoanga">
                          Tchicala-Tcholoanga
                        </option>
                        <option value="Tchindjenje">Tchindjenje</option>
                        <option value="Ucuma">Ucuma</option>
                      </optgroup>

                      <optgroup label="Huíla">
                        <option>Caconda</option>
                        <option>Cacula</option>
                        <option>Caluquembe</option>
                        <option>Chiange</option>
                        <option>Chibia</option>
                        <option>Chicomba</option>
                        <option>Chipindo</option>
                        <option>Humpata</option>
                        <option>Jamba</option>
                        <option>Kuvango</option>
                        <option>Lubango</option>
                        <option>Matala</option>
                        <option>Quilengues</option>
                        <option>Quipungo</option>
                      </optgroup>

                      <optgroup label="Kuando Kubango">
                        <option>Calai</option>
                        <option>Cuangar</option>
                        <option>Cuchi</option>
                        <option>Cuito Cuanavale</option>
                        <option>Dirico</option>
                        <option>Longa</option>
                        <option>Mavinga</option>
                        <option>Menongue</option>
                        <option>Rivungo</option>
                      </optgroup>

                      <optgroup label="Kwanza Norte">
                        <option>Ambaca</option>
                        <option>Banga</option>
                        <option>Bolongongo</option>
                        <option>Cambambe</option>
                        <option>Cazengo</option>
                        <option>Golungo Alto</option>
                        <option>Gonguembo</option>
                        <option>Lucala</option>
                        <option>Quiculungo</option>
                        <option>Samba Caju</option>
                      </optgroup>

                      <optgroup label="Kwanza Sul">
                        <option>Amboim</option>
                        <option>Cassongue</option>
                        <option>Conda</option>
                        <option>Ebo</option>
                        <option>Libolo</option>
                        <option>Mussende</option>
                        <option>Porto Amboim</option>
                        <option>Quibala</option>
                        <option>Quilenda</option>
                        <option>Seles</option>
                        <option>Sumbe</option>
                        <option>Waku Kungo</option>
                      </optgroup>

                      <optgroup label="Lunda Norte">
                        <option>Cambulo</option>
                        <option>Capenda-Camulemba</option>
                        <option>Caungula</option>
                        <option>Chitato (Tchitato)</option>
                        <option>Cuango</option>
                        <option>Cuilo</option>
                        <option>Lóvua</option>
                        <option>Lubalo</option>
                        <option>Lucapa</option>
                        <option>Xá Muteba</option>
                      </optgroup>

                      <optgroup label="Lunda Sul">
                        <option>Cacolo</option>
                        <option>Dala</option>
                        <option>Muconda</option>
                        <option>Saurimo</option>
                      </optgroup>

                      <optgroup label="Malange">
                        <option>Cacuso</option>
                        <option>Calandula</option>
                        <option>Cambundi-Catembo</option>
                        <option>Cangandala</option>
                        <option>Caombo</option>
                        <option>Cuaba Nzogo</option>
                        <option>Cunda-Diaza</option>
                        <option>Luquembo</option>
                        <option>Malange</option>
                        <option>Marimba</option>
                        <option>Massango</option>
                        <option>Caculama-Mucari</option>
                        <option>Quela</option>
                        <option>Quirima</option>
                      </optgroup>

                      <optgroup label="Moxico">
                        <option>Alto Zambeze</option>
                        <option>Capenda-Camulemba</option>
                        <option>Bundas</option>
                        <option>Camanongue</option>
                        <option>Cameia</option>
                        <option>Luau</option>
                        <option>Lucano</option>
                        <option>Luchazes</option>
                        <option>Léua</option>
                        <option>Moxico</option>
                      </optgroup>

                      <optgroup label="Namibe">
                        <option>Bibala</option>
                        <option>Camulo</option>
                        <option>Namibe</option>
                        <option>Tômbua</option>
                        <option>Virei</option>
                      </optgroup>

                      <optgroup label="Uíge">
                        <option>Alto Cauale</option>
                        <option>Ambuíla</option>
                        <option>Bembe</option>
                        <option>Buengas</option>
                        <option>Bungo</option>
                        <option>Damba</option>
                        <option>Macocola</option>
                        <option>Mucaba</option>
                        <option>Negage</option>
                        <option>Puri</option>
                        <option>Quimbele</option>
                        <option>Quitexe</option>
                        <option>Sanza Pombo</option>
                        <option>Songo</option>
                        <option>Uíge</option>
                        <option>Maquela do Zombo</option>
                      </optgroup>

                      <optgroup label="Zaire">
                        <option>Cuimba</option>
                        <option>M'Banza Kongo</option>
                        <option>Noqui</option>
                        <option>N'Zeto</option>
                        <option>Soyo</option>
                        <option>Tomboco</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="col-md-4">
                    {" "}
                    <label htmlFor="file">
                      Escolhe uma foto <br />
                      <a>
                        <img
                          style={{ height: "100px", cursor: "pointer" }}
                          src={
                            file
                              ? imgselected
                              : "https://icons-for-free.com/iconfiles/png/512/profile+user+icon-1320166082804563970.png"
                          }
                          className="rounded-circle avatar-lg img-thumbnail"
                          alt="profile-image"
                        />
                      </a>
                      <input
                        type="file"
                        id="file"
                        accept=".png,.jpeg,.jpg"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">Nivel de Interess</label>
                    <select
                      name=""
                      className="form-control"
                      ref={interesse}
                      defaultValue="1"
                      id=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star"></i>
                      <i className=" text-warning fa fa-star-half"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={() => setFile(null)}
                >
                  Cancelar
                </button>

                {loading ? (
                  <button type="button" className="btn btn-primary">
                    <div
                      className="spinner-border text-white"
                      role="status"
                    ></div>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => NovoUser()}
                    className="btn btn-primary"
                  >
                    Guardar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modal-lg">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Informações do Cliente</h4>

                {clienteinfo.etapa == "novo" ? (
                  <button
                    data-dismiss="modal"
                    className="btn btn-warning"
                    onClick={() => QualificarCliente()}
                  >
                    Qualificar
                  </button>
                ) : (
                  ""
                )}

                {clienteinfo.etapa == "proposta" ? (
                  <button
                    data-dismiss="modal"
                    className="btn btn-warning"
                    onClick={() => RealizarCliente()}
                  >
                    Realizado
                  </button>
                ) : (
                  ""
                )}

                {clienteinfo.etapa == "qualificado" ? (
                  criarproposta ? (
                    <button
                      className="btn btn-info"
                      onClick={() => setcriarproposta(!criarproposta)}
                    >
                      Dados do Cliente
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => setcriarproposta(!criarproposta)}
                    >
                      Criar Proposta
                    </button>
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="modal-body">
                <div className="row">
                  {criarproposta ? (
                    <>
                      <div className="row">
                        <div className="col-md-12">
                          <h4>
                            Destinario:{" "}
                            <span className="text-info">
                              {clienteinfo.nome}
                            </span>{" "}
                          </h4>
                        </div>
                        <div className="col-md-2"></div>

                        <div className="col-md-12">
                          <input
                            type="text"
                            ref={assunto}
                            placeholder="Assunto:"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-2"></div>

                        <div className="col-md-12 mt-2">
                          <textarea
                            name=""
                            id=""
                            className="form-control "
                            rows={6}
                            placeholder="Mensagem"
                            ref={proposta}
                          ></textarea>
                        </div>
                        <div className="col-md-12"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Nome Completo</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nome do cliente"
                          defaultValue={clienteinfo.nome}
                          readOnly
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Nº Telefone</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="+244"
                          defaultValue={clienteinfo.Tel}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="sucran@exemplo.com"
                          defaultValue={clienteinfo.email}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Profissão</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="*Doctor"
                          defaultValue={clienteinfo.proffisao}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label for="localidade" className="form-label">
                          Província
                        </label>
                        <select
                          name="localidade"
                          defaultValue={clienteinfo.provincia}
                          className="form-control"
                          id=""
                          readOnly
                        >
                          <option value="Luanda">Luanda</option>
                          <option value="Bengo">Bengo</option>
                          <option value="Benguela">Benguela</option>
                          <option value="Bié">Bié</option>
                          <option value="Cabinda">Cabinda</option>
                          <option value="Cunene">Cunene</option>
                          <option value="Huambo">Huambo</option>
                          <option value="Huíla">Huíla</option>
                          <option value="Kuando Kubango">Kuando Kubango</option>
                          <option value="Kwanza Norte">Kwanza Norte</option>
                          <option value="Kwanza Sul">Kwanza Sul</option>
                          <option value="Lunda Norte">Lunda Norte</option>
                          <option value="Lunda Sul">Lunda Sul</option>
                          <option value="Malange">Malange</option>
                          <option value="Moxico">Moxico</option>
                          <option value="Namibe">Namibe</option>
                          <option value="Uíge">Uíge</option>
                          <option value="Zaire">Zaire</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label for="municioio" className="form-label">
                          Município <span className="text-danger">*</span>
                        </label>
                        <select
                          defaultValue={clienteinfo.municipio}
                          className="form-control select2"
                          data-toggle="select2"
                          readOnly
                        >
                          <optgroup label="Luanda">
                            <option value="Luanda">Luanda</option>
                            <option value="Belas">Belas</option>
                            <option value="Cacuaco">Cacuaco</option>
                            <option value="Cazenga">Cazenga</option>
                            <option value="Icolo e Bengo">Icolo e Bengo</option>
                            <option value="Quiçama">Quiçama</option>
                            <option value="Kilamba">Kilamba Kiaxi</option>
                            <option value="Talatona">Talatona</option>
                            <option value="Viana">Viana</option>
                          </optgroup>
                          <optgroup label="Bengo">
                            <option value="Ambriz">Ambriz</option>
                            <option value="Dande">Dande</option>
                            <option value="Dembos">Dembos</option>
                            <option value="Bula Atumba">Bula Atumba</option>
                            <option value="Nambuangongo">Nambuangongo</option>
                            <option value="Pango Aluquêm">Pango Aluquêm</option>
                          </optgroup>

                          <optgroup label="Benguela">
                            <option value="Benguela">Benguela</option>
                            <option value="Balombo">Balombo</option>
                            <option value="Baía Farta">Baía Farta</option>
                            <option value="Bocoio">Bocoio</option>
                            <option value="Caimbambo">Caimbambo</option>
                            <option value="Catumbela">Catumbela</option>
                            <option value="Chongoroi">Chongoroi</option>
                            <option value="Cubal">Cubal</option>
                            <option value="Bocoio">Bocoio</option>
                            <option value="Ganda">Ganda</option>
                            <option value="Lobito">Lobito</option>
                          </optgroup>

                          <optgroup label="Bié">
                            <option value="Andulo">Andulo</option>
                            <option value="Camacupa">Camacupa</option>
                            <option value="Catabola">Catabola</option>
                            <option value="Chinguar">Chinguar</option>
                            <option value="Chitembo">Chitembo</option>
                            <option value="Cuemba">Cuemba</option>
                            <option value="Cunhinga">Cunhinga</option>
                            <option value="Kuito">Kuito</option>
                            <option value="Nharea">Nharea</option>
                          </optgroup>

                          <optgroup label="Cabinda">
                            <option vlaue="Belize">Belize</option>
                            <option vlaue="Buco-Zau">Buco-Zau</option>
                            <option vlaue="Cabinda">Cabinda</option>
                            <option vlaue="Cacongo">Cacongo</option>
                          </optgroup>

                          <optgroup label="Cunene">
                            <option value="Cahama">Cahama</option>
                            <option value="Cuanhama">Cuanhama</option>
                            <option value="Curoca">Curoca</option>
                            <option value="Cuvelay">Cuvelay</option>
                            <option value="Namacunde">Namacunde</option>
                            <option value="Ombadja">Ombadja</option>
                          </optgroup>

                          <optgroup label="Cunene">
                            <option value="Bailundo">Bailundo</option>
                            <option value="Catchiungo">Catchiungo</option>
                            <option value="Caála">Caála</option>
                            <option value="Ekunha">Ekunha</option>
                            <option value="Huambo">Huambo</option>
                            <option value="Londuimbale">Londuimbale</option>
                            <option value="Longongo">Longongo</option>
                            <option value="Mungo">Mungo</option>
                            <option value="Tchicala-Tcholoanga">
                              Tchicala-Tcholoanga
                            </option>
                            <option value="Tchindjenje">Tchindjenje</option>
                            <option value="Ucuma">Ucuma</option>
                          </optgroup>

                          <optgroup label="Huíla">
                            <option>Caconda</option>
                            <option>Cacula</option>
                            <option>Caluquembe</option>
                            <option>Chiange</option>
                            <option>Chibia</option>
                            <option>Chicomba</option>
                            <option>Chipindo</option>
                            <option>Humpata</option>
                            <option>Jamba</option>
                            <option>Kuvango</option>
                            <option>Lubango</option>
                            <option>Matala</option>
                            <option>Quilengues</option>
                            <option>Quipungo</option>
                          </optgroup>

                          <optgroup label="Kuando Kubango">
                            <option>Calai</option>
                            <option>Cuangar</option>
                            <option>Cuchi</option>
                            <option>Cuito Cuanavale</option>
                            <option>Dirico</option>
                            <option>Longa</option>
                            <option>Mavinga</option>
                            <option>Menongue</option>
                            <option>Rivungo</option>
                          </optgroup>

                          <optgroup label="Kwanza Norte">
                            <option>Ambaca</option>
                            <option>Banga</option>
                            <option>Bolongongo</option>
                            <option>Cambambe</option>
                            <option>Cazengo</option>
                            <option>Golungo Alto</option>
                            <option>Gonguembo</option>
                            <option>Lucala</option>
                            <option>Quiculungo</option>
                            <option>Samba Caju</option>
                          </optgroup>

                          <optgroup label="Kwanza Sul">
                            <option>Amboim</option>
                            <option>Cassongue</option>
                            <option>Conda</option>
                            <option>Ebo</option>
                            <option>Libolo</option>
                            <option>Mussende</option>
                            <option>Porto Amboim</option>
                            <option>Quibala</option>
                            <option>Quilenda</option>
                            <option>Seles</option>
                            <option>Sumbe</option>
                            <option>Waku Kungo</option>
                          </optgroup>

                          <optgroup label="Lunda Norte">
                            <option>Cambulo</option>
                            <option>Capenda-Camulemba</option>
                            <option>Caungula</option>
                            <option>Chitato (Tchitato)</option>
                            <option>Cuango</option>
                            <option>Cuilo</option>
                            <option>Lóvua</option>
                            <option>Lubalo</option>
                            <option>Lucapa</option>
                            <option>Xá Muteba</option>
                          </optgroup>

                          <optgroup label="Lunda Sul">
                            <option>Cacolo</option>
                            <option>Dala</option>
                            <option>Muconda</option>
                            <option>Saurimo</option>
                          </optgroup>

                          <optgroup label="Malange">
                            <option>Cacuso</option>
                            <option>Calandula</option>
                            <option>Cambundi-Catembo</option>
                            <option>Cangandala</option>
                            <option>Caombo</option>
                            <option>Cuaba Nzogo</option>
                            <option>Cunda-Diaza</option>
                            <option>Luquembo</option>
                            <option>Malange</option>
                            <option>Marimba</option>
                            <option>Massango</option>
                            <option>Caculama-Mucari</option>
                            <option>Quela</option>
                            <option>Quirima</option>
                          </optgroup>

                          <optgroup label="Moxico">
                            <option>Alto Zambeze</option>
                            <option>Capenda-Camulemba</option>
                            <option>Bundas</option>
                            <option>Camanongue</option>
                            <option>Cameia</option>
                            <option>Luau</option>
                            <option>Lucano</option>
                            <option>Luchazes</option>
                            <option>Léua</option>
                            <option>Moxico</option>
                          </optgroup>

                          <optgroup label="Namibe">
                            <option>Bibala</option>
                            <option>Camulo</option>
                            <option>Namibe</option>
                            <option>Tômbua</option>
                            <option>Virei</option>
                          </optgroup>

                          <optgroup label="Uíge">
                            <option>Alto Cauale</option>
                            <option>Ambuíla</option>
                            <option>Bembe</option>
                            <option>Buengas</option>
                            <option>Bungo</option>
                            <option>Damba</option>
                            <option>Macocola</option>
                            <option>Mucaba</option>
                            <option>Negage</option>
                            <option>Puri</option>
                            <option>Quimbele</option>
                            <option>Quitexe</option>
                            <option>Sanza Pombo</option>
                            <option>Songo</option>
                            <option>Uíge</option>
                            <option>Maquela do Zombo</option>
                          </optgroup>

                          <optgroup label="Zaire">
                            <option>Cuimba</option>
                            <option>M'Banza Kongo</option>
                            <option>Noqui</option>
                            <option>N'Zeto</option>
                            <option>Soyo</option>
                            <option>Tomboco</option>
                          </optgroup>
                        </select>
                      </div>

                      <div className="col-md-4">
                        Escolhe uma foto <br />
                        <img
                          style={{ height: "100px", cursor: "pointer" }}
                          src="https://icons-for-free.com/iconfiles/png/512/profile+user+icon-1320166082804563970.png"
                          className="rounded-circle avatar-lg img-thumbnail"
                          alt="profile-image"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Nivel de Interess</label>
                        <p>
                          <Interweave content={clienteinfo.estrelas} />
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Fechar
                </button>

                {criarproposta ? (
                  <button
                    type="button"
                    onClick={() => PropostaCliente()}
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Enviar
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

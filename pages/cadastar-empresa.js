import { useRef, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cadastarempresa() {
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState();
  const [imgselected, setimgselected] = useState();

  var toaststate;
  const nome = useRef();
  const email = useRef();
  const tel = useRef();
  const categoria = useRef();
  const descricao = useRef();
  const titulo_problema = useRef();
  const descricao_problema = useRef();
  const titulo_solucao = useRef();
  const descricao_solucao = useRef();
  const titulo_tracao = useRef();
  const descricao_tracao = useRef();
  const titulo_modelo_negocio = useRef();
  const descricao_modelo_negocio = useRef();
  const titulo_lideranca = useRef();
  const descricao_lideranca = useRef();
  const motivo_de_investir = useRef();
  const avaliacao = useRef();
  const preco_por_accao = useRef();
  const investimento_min = useRef();
  const accoes_oferecidas = useRef();
  const tipo_de_oferta = useRef();

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

  const sendimg = async () => {
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());
    console.log(result.secure_url);
  };

  const onFormSubmit = async (e) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    e.preventDefault();
    setloading(true);

    if (
      !nome.current.value ||
      !email.current.value ||
      !tel.current.value ||
      !categoria.current.value ||
      !descricao.current.value ||
      !titulo_problema.current.value ||
      !descricao_problema.current.value ||
      !titulo_solucao.current.value ||
      !descricao_solucao.current.value ||
      !titulo_tracao.current.value ||
      !descricao_tracao.current.value ||
      !titulo_modelo_negocio.current.value ||
      !descricao_modelo_negocio.current.value ||
      !titulo_lideranca.current.value ||
      !descricao_lideranca.current.value ||
      !motivo_de_investir.current.value ||
      !avaliacao.current.value ||
      !preco_por_accao.current.value ||
      !investimento_min.current.value ||
      !accoes_oferecidas.current.value ||
      !tipo_de_oferta.current.value ||
      !file
    ) {
      toast.update(toaststate, {
        render: "preenche todos os campos",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setloading(false);

      return;
    }

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

    const res = await fetch("/api/empresa/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome.current.value,
        email: email.current.value,
        tel: tel.current.value,
        categoria: categoria.current.value,
        descricao: descricao.current.value,
        titulo_problema: titulo_problema.current.value,
        descricao_problema: descricao_problema.current.value,
        titulo_solucao: titulo_solucao.current.value,
        descricao_solucao: descricao_solucao.current.value,
        titulo_tracao: titulo_tracao.current.value,
        descricao_tracao: descricao_tracao.current.value,
        titulo_modelo_negocio: titulo_modelo_negocio.current.value,
        descricao_modelo_negocio: descricao_modelo_negocio.current.value,
        titulo_lideranca: titulo_lideranca.current.value,
        descricao_lideranca: descricao_lideranca.current.value,
        motivo_de_investir: motivo_de_investir.current.value,
        avaliacao: avaliacao.current.value,
        preco_por_accao: preco_por_accao.current.value,
        investimento_min: investimento_min.current.value,
        accoes_oferecidas: accoes_oferecidas.current.value,
        tipo_de_oferta: tipo_de_oferta.current.value,
        imgurl: result.secure_url,
        investidores: 0,
      }),
    });
    //Await for data for any desirable next steps
    setloading(false);

    const data = await res.json();
    if (data.message == "erro") {
      toast.update(toaststate, {
        render: "acorreu um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }

    if (data.message == "success") {
      $(".value").val("");
      setFile(null);
      toast.update(toaststate, {
        render: "Cadastrado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }
  };

  return (
    <>
      <div className="">
        <h1>Cadastar Empresas</h1>
      </div>
      <section className="mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div class="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Nova Empresa</h3>
              </div>
              <div className="card-body">
                <form onSubmit={onFormSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="file">
                        <a>
                          {" "}
                          <i
                            className="bi bi-camera-fill"
                            style={{ fontSize: "50px" }}
                          >
                            {" "}
                            +
                          </i>
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
                    {imgselected ? (
                      <div className="col-md-12">
                        <div className="float-right">
                          <a
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {
                              setFile(null);
                            }}
                          >
                            <i className="bi bi-x"></i>
                          </a>
                        </div>
                        <img className="img-fluid" src={imgselected} />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nome da Empresa</label>
                        <input
                          type="text"
                          className="form-control value"
                          placeholder="nome da empresa"
                          ref={nome}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control value"
                          placeholder="Email"
                          ref={email}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Telefone</label>
                        <input
                          type="text"
                          className="form-control value"
                          placeholder="Digite o numero de telefone"
                          ref={tel}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Categoria</label>

                        <select className="form-control" ref={categoria}>
                          <option value="Alimentos e bebidas">
                            Alimentos e bebidas
                          </option>
                          <option value="Artesanato e produtos de luxo">
                            Artesanato e produtos de luxo
                          </option>
                          <option value="Construção">Construção</option>
                          <option value="Publicação e impressão">
                            Publicação e impressão
                          </option>
                          <option value="Energia">Energia</option>
                          <option value="Manufatura industrial">
                            Manufatura industrial
                          </option>
                          <option value="Serviços">Serviços</option>
                          <option value="Esporte e Bem-estar">
                            Esporte e Bem-estar
                          </option>
                          <option value=" Tecnologia de TI e Comunicações">
                            Tecnologia de TI e Comunicações
                          </option>
                          <option value="Transporte">Transporte</option>
                          <option value="Automoveis">Automoveis</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mt-1">
                      <div className="form-group">
                        <label>Descrição(breve da empresa)</label>
                        <textarea
                          className="form-control value"
                          placeholder="breve descrição"
                          ref={descricao}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 mt-1">
                      <div className="form-group">
                        <label>Razões para investir</label>
                        <textarea
                          className="form-control value"
                          placeholder="Razões para investir"
                          ref={motivo_de_investir}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>Investidores</label>
                        <input
                          className="form-control value"
                          type="number"
                          defaultValue={0}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>Avaliação</label>
                        <input
                          className="form-control value"
                          type="number"
                          ref={avaliacao}
                          placeholder="Avaliação"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>Preço por acção</label>
                        <input
                          className="form-control value"
                          type="number"
                          ref={preco_por_accao}
                          placeholder="preço por acção"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>Investimento min</label>
                        <input
                          className="form-control value"
                          type="number"
                          ref={investimento_min}
                          placeholder="investimento min"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>Ações oferecidas</label>
                        <input
                          className="form-control value"
                          type="text"
                          ref={accoes_oferecidas}
                          placeholder="Tipo de acções oferecidas"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 mt-1">
                      <div className="form-group">
                        <label>tipo de oferta</label>
                        <input
                          className="form-control value"
                          type="text"
                          ref={tipo_de_oferta}
                          placeholder="Tipo de oferta"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 mt-4">
                      <h4>O problema</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Titulo do Problema</label>
                        <textarea
                          className="form-control value"
                          placeholder="Titulo do Problem"
                          ref={titulo_problema}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Descrição do problema</label>
                        <textarea
                          className="form-control value"
                          placeholder="Descreve o problema"
                          ref={descricao_problema}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 mt-4">
                      <h4>A solução</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Titulo da solução</label>
                        <textarea
                          className="form-control value"
                          placeholder="Titulo da solução"
                          ref={titulo_solucao}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Descrição da solução</label>
                        <textarea
                          className="form-control value"
                          placeholder="Descreve a solução"
                          ref={descricao_solucao}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 mt-4">
                      <h4>Nossa Tração</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Titulo da tração</label>
                        <textarea
                          className="form-control value"
                          placeholder="Titulo da tração"
                          ref={titulo_tracao}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Descrição da tração</label>
                        <textarea
                          className="form-control value"
                          placeholder="Descreve a tração"
                          ref={descricao_tracao}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 mt-4">
                      <h4>Modelo de negócio</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Titulo do modelo</label>
                        <textarea
                          className="form-control value"
                          placeholder="Titulo do modelo"
                          ref={titulo_modelo_negocio}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Descrição do modelo</label>
                        <textarea
                          className="form-control value"
                          placeholder="Descreve o modelo"
                          ref={descricao_modelo_negocio}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 mt-4">
                      <h4>Liderança</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Titulo da Liderança</label>
                        <textarea
                          className="form-control value"
                          placeholder="Titulo da tração"
                          ref={titulo_lideranca}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Descrição da tração</label>
                        <textarea
                          className="form-control value"
                          placeholder="Descreve a tração"
                          ref={descricao_lideranca}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-4">
                      {loading ? (
                        <button className="btn btn-primary" disabled>
                          Cadastrar
                        </button>
                      ) : (
                        <button className="btn btn-primary" type="submit">
                          Cadastrar
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

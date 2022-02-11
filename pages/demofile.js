import Head from "next/head";

export default function Pipeline() {
  return (
    <div className="container">
      <Head>
        <title>Adimin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row">
          <div className="col-lg-6 mt-5 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Saudações</h5>

                <h2 className="card-text">Seja bem-vindo!</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

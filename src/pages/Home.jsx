import "../styles/home.css";
import Header from "../components/Header";

function Home() {
  return (
    <>
     <Header />

      <main>
        <section className="intro">
          <h1>
            Seu Futuro começa <strong>AQUI</strong>
          </h1>

          <h2>
            Dê vida ao setup dos seus sonhos com o que há de melhor no mercado.
          </h2>

          <button className="compreAgora">
            <a href="/catalogo">Compre Agora</a>
          </button>
        </section>

        <h1>Por que comprar na HyperTech?</h1>

        <section className="motivo">
          <div className="card">
            <h2>O Melhor do Mercado ao Seu Alcance!</h2>
            <hr />

            <p>
              Trabalhamos com marcas líderes e componentes de elite.
              Comprando na HyperTech Shop, você tem a certeza de que irá
              adquirir o que há de mais avançado, e eficiente para garantir
              a máxima performance.
            </p>
          </div>

          <div className="card">
            <h2>A Realização do Seu Setup dos Sonhos!</h2>
            <hr />

            <p>
              Sabemos que o seu setup é um projeto único. Por isso, oferecemos
              um catálogo selecionado para transformar os seus planos em
              realidade, entregando a performance e a estética que você
              sempre sonhou.
            </p>
          </div>

          <div className="card">
            <h2>
              Um Investimento no
              <br />
              Seu Futuro!
            </h2>

            <hr />

            <p>
              A tecnologia muda rapidamente, e nós ajudamos você a largar na
              frente. Nossos produtos que garantem inovação, alta durabilidade
              e protegem o seu investimento por muito mais tempo.
            </p>
          </div>
        </section>

        <section className="more-about">
          <h2>O Melhor do Mercado ao Seu Alcance!</h2>

          <p id="txt1">
            Trabalhamos com marcas líderes e componentes de elite.
            Comprando na HyperTech Shop, você tem a certeza de que irá
            adquirir o que há de mais avançado, e eficiente para garantir
            a máxima performance.
          </p>
        </section>

        <section className="more-about">
          <h2 id="title-txt2">
            A Realização do Seu Setup dos Sonhos!
          </h2>

          <p id="txt2">
            Sabemos que o seu setup é um projeto único. Por isso, oferecemos
            um catálogo selecionado para transformar os seus planos em
            realidade, entregando a performance e a estética que você
            sempre sonhou.
          </p>
        </section>

        <section className="more-about">
          <h2>Um Investimento no Seu Futuro!</h2>

          <p id="txt3">
            Sabemos que o seu setup é um projeto único. Por isso, oferecemos
            um catálogo selecionado para transformar os seus planos em
            realidade, entregando a performance e a estética que você
            sempre sonhou.
          </p>
        </section>
      </main>

      <footer>
        <div className="rodape">
          <h1>Contate a gente!</h1>

          <p className="textoRodape">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/716/480/original/whatsapp-icon-free-png.png"
              width="30"
              alt="WhatsApp"
            />
            +55 (21) 4056-3140
          </p>

          <p className="textoRodape">
            <strong>Suporte: suporte@hypertech.com</strong>
          </p>

          <p className="textoRodape">
            <img
              src="https://i.pinimg.com/originals/0f/6b/b5/0f6bb5442837792bca08c3243cc160a6.png"
              width="30"
              alt="Instagram"
            />
            @hypertech
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
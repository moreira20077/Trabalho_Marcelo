import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Header from "../components/Header";
import "../styles/catalogo.css";

function Catalogo() {
  const produtosComputadores = [
    {
      imagem: "/images/examples/1-pc.png",
      nome: "Computador PC Gamer Completo Tob Intel Core I7 SSD480GB 16gb...",
    },
    {
      imagem: "/images/examples/2-pc.png",
      nome: "PC Gamer, Intel Core Ultra 7 265K, GeForce RTX 5070 12GB...",
    },
    {
      imagem: "/images/examples/3-pc.png",
      nome: "PC Gamer Pichau Simulador LV2, AMD Ryzen 7 5700X, GeForce RTX 5060 Ti 8GB...",
    },
    {
      imagem: "/images/examples/4-pc.png",
      nome: "PC Gamer Pichau MSI, Intel i7-14700KF, GeForce RTX 5070 12GB...",
    },
  ];

  return (
    <>
      <Header />

      <main>

        {/* CARROSSEL PRINCIPAL */}

        <Swiper
          className="intro-swiper"
          modules={[Navigation]}
          slidesPerView={1.6}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/images/examples/intro.jpg"
              alt="Intro"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta1.jpg"
              alt="Oferta 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta2.jpg"
              alt="Oferta 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta1.jpg"
              alt="Oferta 3"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta3.png"
              alt="Oferta 4"
            />
          </SwiperSlide>
        </Swiper>


        {/* CATEGORIAS */}

        <div className="product-type">

          <a href="#pecas" className="icon-box">
            <img
              src="/images/icons/hardware.png"
              alt="Peças"
              className="product-icon"
            />
            <span>Peças</span>
          </a>

          <a href="#perifericos" className="icon-box">
            <img
              src="/images/icons/mouse.png"
              alt="Periféricos"
              className="product-icon"
            />
            <span>Periféricos</span>
          </a>

          <a href="#computadores" className="icon-box">
            <img
              src="/images/icons/pc.png"
              alt="Computadores"
              className="product-icon"
            />
            <span>Computadores</span>
          </a>

          <a href="#games" className="icon-box">
            <img
              src="/images/icons/controle.png"
              alt="Games"
              className="product-icon"
            />
            <span>Games</span>
          </a>

          <a href="#smartphones" className="icon-box">
            <img
              src="/images/icons/celular.png"
              alt="Smartphones"
              className="product-icon"
            />
            <span>Smartphones</span>
          </a>

          <a href="#monte-pc" className="icon-box">
            <img
              src="/images/icons/ferramenta.png"
              alt="Monte seu PC"
              className="product-icon"
            />
            <span>Monte seu PC</span>
          </a>

        </div>


        {/* PEÇAS */}

        <section id="pecas">

          <h2 className="product-title">
            Peças
          </h2>

          <div className="product-block">

            <Swiper
              className="computadores-swiper"
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              navigation={true}
            >

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Componentes para computador",
                        imagem: "/images/examples/placeholder1.jpg",
                        preco: 150.00,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder1.jpg"
                    alt="Componentes para computador"
                  />

                  <p className="nome-produto">
                    Componentes para computador
                  </p>

                  <p className="preco-atual">
                    Confira nossos produtos
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Hardware",
                        imagem: "/images/examples/placeholder2.jpg",
                        preco: 100.00,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder2.jpg"
                    alt="Hardware"
                  />

                  <p className="nome-produto">
                    Hardware
                  </p>

                  <p className="preco-atual">
                    Confira nossos produtos
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Componentes Gamer",
                        imagem: "/images/examples/placeholder3.jpg",
                        preco: 150.00,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder3.jpg"
                    alt="Componentes Gamer"
                  />

                  <p className="nome-produto">
                    Componentes Gamer
                  </p>

                  <p className="preco-atual">
                    Confira nossos produtos
                  </p>
                </Link>
              </SwiperSlide>

            </Swiper>

          </div>

        </section>


        {/* PERIFÉRICOS */}

        <section id="perifericos">

          <h2 className="product-title">
            Periféricos
          </h2>

          <div className="product-block">

            <Swiper
              className="computadores-swiper"
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              navigation={true}
            >

              <SwiperSlide>
                <div
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Mouse Gamer",
                        imagem: "/images/examples/placeholder1.jpg",
                        preco: 99.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );

                    window.location.href = "/carrinho";
                  }}
                  style={{ cursor: "pointer" }}
                >

                  <img
                    src="/images/examples/placeholder1.jpg"
                    alt="Mouse Gamer"
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <p className="nome-produto">
                    Mouse Gamer
                  </p>

                  <p className="preco-atual">
                    R$99,90
                  </p>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Teclado Gamer",
                        imagem: "/images/examples/placeholder2.jpg",
                        preco: 149.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >

                  <img
                    src="/images/examples/placeholder2.jpg"
                    alt="Teclado Gamer"
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <p className="nome-produto">
                    Teclado Gamer
                  </p>

                  <p className="preco-atual">
                    R$149,90
                  </p>

                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Headset Gamer",
                        imagem: "/images/examples/placeholder3.jpg",
                        preco: 199.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder3.jpg"
                    alt="Headset Gamer"
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <p className="nome-produto">
                    Headset Gamer
                  </p>

                  <p className="preco-atual">
                    R$199,90
                  </p>
                </Link>
              </SwiperSlide>

            </Swiper>

          </div>

        </section>


        {/* GAMES */}

        <section id="games">

          <h2 className="product-title">
            Games
          </h2>

          <div className="product-block">

            <Swiper
              className="computadores-swiper"
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              navigation={true}
            >

              {/* CONTROLE GAMER */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Controle Gamer",
                        imagem: "/images/examples/placeholder1.jpg",
                        preco: 199.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder1.jpg"
                    alt="Controle Gamer"
                  />

                  <p className="nome-produto">
                    Controle Gamer
                  </p>

                  <p className="preco-atual">
                    R$199,90
                  </p>
                </Link>
              </SwiperSlide>


              {/* GOD OF WAR RAGNARÖK */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "God of War Ragnarök",
                        imagem: "/images/examples/god-of-war.jpg",
                        preco: 249.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/god-of-war.jpg"
                    alt="God of War Ragnarök"
                  />

                  <p className="nome-produto">
                    God of War Ragnarök
                  </p>

                  <p className="preco-atual">
                    R$249,90
                  </p>
                </Link>
              </SwiperSlide>


              {/* MINECRAFT */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Minecraft",
                        imagem: "/images/examples/minecraft.jpg",
                        preco: 99.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/minecraft.jpg"
                    alt="Minecraft"
                  />

                  <p className="nome-produto">
                    Minecraft
                  </p>

                  <p className="preco-atual">
                    R$99,90
                  </p>
                </Link>
              </SwiperSlide>


              {/* GTA V */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Grand Theft Auto V",
                        imagem: "/images/examples/gta-v.jpg",
                        preco: 149.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/gta-v.jpg"
                    alt="Grand Theft Auto V"
                  />

                  <p className="nome-produto">
                    Grand Theft Auto V
                  </p>

                  <p className="preco-atual">
                    R$149,90
                  </p>
                </Link>
              </SwiperSlide>


              {/* MARVEL'S SPIDER-MAN 2 */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Marvel's Spider-Man 2",
                        imagem: "/images/examples/spider-man-2.jpg",
                        preco: 249.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/spider-man-2.jpg"
                    alt="Marvel's Spider-Man 2"
                  />

                  <p className="nome-produto">
                    Marvel's Spider-Man 2
                  </p>

                  <p className="preco-atual">
                    R$249,90
                  </p>
                </Link>
              </SwiperSlide>


              {/* RESIDENT EVIL 4 */}

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Resident Evil 4",
                        imagem: "/images/examples/resident-evil-4.jpg",
                        preco: 199.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/resident-evil-4.jpg"
                    alt="Resident Evil 4"
                  />

                  <p className="nome-produto">
                    Resident Evil 4
                  </p>

                  <p className="preco-atual">
                    R$199,90
                  </p>
                </Link>
              </SwiperSlide>

            </Swiper>

          </div>

        </section>


        {/* SMARTPHONES */}

        <section id="smartphones">

          <h2 className="product-title">
            Smartphones
          </h2>

          <div className="product-block">

            <Swiper
              className="computadores-swiper"
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              navigation={true}
            >


              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Smartphone",
                        imagem: "/images/examples/placeholder1.jpg",
                        preco: 1299.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder1.jpg"
                    alt="Smartphone"
                  />

                  <p className="nome-produto">
                    Smartphone
                  </p>

                  <p className="preco-atual">
                    R$1.299,90
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Smartphone Gamer",
                        imagem: "/images/examples/placeholder2.jpg",
                        preco: 1999.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder2.jpg"
                    alt="Smartphone Gamer"
                  />

                  <p className="nome-produto">
                    Smartphone Gamer
                  </p>

                  <p className="preco-atual">
                    R$1.999,90
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Acessórios para celular",
                        imagem: "/images/examples/placeholder3.jpg",
                        preco: 99.90,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder3.jpg"
                    alt="Acessórios para celular"
                  />

                  <p className="nome-produto">
                    Acessórios para celular
                  </p>

                  <p className="preco-atual">
                    R$99,90
                  </p>
                </Link>
              </SwiperSlide>

            </Swiper>

          </div>

        </section>


        {/* MONTE SEU PC */}

        <section id="monte-pc">

          <h2 className="product-title">
            Monte seu PC
          </h2>

          <div className="product-block">

            <Swiper
              className="computadores-swiper"
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              navigation={true}
            >

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "Monte seu PC Gamer",
                        imagem: "/images/examples/placeholder1.jpg",
                        preco: 0,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder1.jpg"
                    alt="Monte seu PC Gamer"
                  />

                  <p className="nome-produto">
                    Monte seu PC Gamer
                  </p>

                  <p className="preco-atual">
                    Escolha suas peças
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "PC para trabalho",
                        imagem: "/images/examples/placeholder2.jpg",
                        preco: 0,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder2.jpg"
                    alt="PC para trabalho"
                  />

                  <p className="nome-produto">
                    PC para trabalho
                  </p>

                  <p className="preco-atual">
                    Escolha suas peças
                  </p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  to="/carrinho"
                  className="card-produto"
                  onClick={() => {
                    localStorage.setItem(
                      "produtoCarrinho",
                      JSON.stringify({
                        nome: "PC personalizado",
                        imagem: "/images/examples/placeholder3.jpg",
                        preco: 0,
                      })
                    );

                    localStorage.setItem(
                      "quantidadeCarrinho",
                      "1"
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src="/images/examples/placeholder3.jpg"
                    alt="PC personalizado"
                  />

                  <p className="nome-produto">
                    PC personalizado
                  </p>

                  <p className="preco-atual">
                    Escolha suas peças
                  </p>
                </Link>
              </SwiperSlide>

            </Swiper>

          </div>

        </section>


        {/* COMPUTADORES */}

        <h2
          id="computadores"
          className="product-title"
        >
          Computadores
        </h2>

        <div className="product-block">

          <Swiper
            className="computadores-swiper"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
          >

            {produtosComputadores.map((produto, index) => (
              <SwiperSlide key={index}>

                <div className="card-produto">

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <Link to="/produto">
                    <p className="nome-produto">
                      {produto.nome}
                    </p>
                  </Link>

                  <p className="preco-antigo">
                    R$2.124,06
                  </p>

                  <p className="preco-atual">
                    R$1.629,90
                  </p>

                  <p className="parcelamento">
                    No PIX ou 10x de 162,99
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>


          {/* SEGUNDO CARROSSEL */}

          <Swiper
            className="computadores-swiper2"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
          >

            {produtosComputadores.map((produto, index) => (
              <SwiperSlide key={index}>

                <div className="card-produto">

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <Link to="/produto">
                    <p className="nome-produto">
                      {produto.nome}
                    </p>
                  </Link>

                  <p className="preco-antigo">
                    R$2.124,06
                  </p>

                  <p className="preco-atual">
                    R$1.629,90
                  </p>

                  <p className="parcelamento">
                    No PIX ou 10x de 162,99
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </main>


      {/* RODAPÉ */}

      <footer>

        <div className="rodape">

          <h1>
            Contate a gente!
          </h1>

          <p className="textoRodape">
            📱 +55(21)4056-3140
          </p>

          <p className="textoRodape">
            <strong>
              Suporte: suporte@hypertech.com
            </strong>
          </p>

          <p className="textoRodape">
            📷 @hypertech
          </p>

        </div>

      </footer>
    </>
  );
}

export default Catalogo;
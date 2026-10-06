import Header from "../components/Header";
import "../styles/produto.css";
import { Link } from "react-router-dom";

const produto = {
    nome: "Computador PC Gamer",
    imagem: "/images/examples/1-pc.png",
    preco: 1629.90,
};

function Produto() {
    return (
        <>
            <Header />

            <main>
                <section className="produto-detalhes">

                    <div className="produto-imagem">
                        <img
                            src="/images/examples/1-pc.png"
                            alt="Computador PC Gamer"
                        />
                    </div>

                    <div className="produto-info">
                        <h1>Computador PC Gamer</h1>

                        <p className="frete">Frete Grátis*</p>

                        <p className="preco-antigo">
                            R$2.124,06
                        </p>

                        <p className="preco-atual">
                            R$1.629,90
                        </p>

                        <p className="parcelamento">
                            No PIX ou 10x de 162,99
                        </p>

                        <Link
                            to="/carrinho"
                            className="btn-comprar"
                            onClick={() => {
                                localStorage.setItem(
                                    "produtoCarrinho",
                                    JSON.stringify(produto)
                                );
                            }}
                        >
                            Comprar agora
                        </Link>

                        <p>Detalhes do produto</p>
                    </div>

                </section>
            </main>
        </>
    );
}

export default Produto;
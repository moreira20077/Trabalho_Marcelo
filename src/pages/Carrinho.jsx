import React from "react";
import Header from "../components/Header";
import "../styles/carrinho.css";
import { Link } from "react-router-dom";

function Carrinho() {
    const produto = JSON.parse(
        localStorage.getItem("produtoCarrinho")
    );

    const [quantidade, setQuantidade] = React.useState(() => {
        const quantidadeSalva =
            localStorage.getItem("quantidadeCarrinho");

        return quantidadeSalva
            ? Number(quantidadeSalva)
            : 1;
    });

    return (
        <>
            <Header />

            <main className="carrinho">
                <h1>Meu Carrinho</h1>

                {produto ? (
                    <div className="carrinho-produto">

                        <img
                            src={produto.imagem}
                            alt={produto.nome}
                        />

                        <div className="carrinho-info">

                            <h2>{produto.nome}</h2>

                            <div className="quantidade">

                                <button
                                    onClick={() => {
                                        const novaQuantidade =
                                            Math.max(
                                                1,
                                                quantidade - 1
                                            );

                                        setQuantidade(
                                            novaQuantidade
                                        );

                                        localStorage.setItem(
                                            "quantidadeCarrinho",
                                            novaQuantidade
                                        );
                                    }}
                                >
                                    -
                                </button>

                                <span>{quantidade}</span>

                                <button
                                    onClick={() => {
                                        const novaQuantidade =
                                            quantidade + 1;

                                        setQuantidade(
                                            novaQuantidade
                                        );

                                        localStorage.setItem(
                                            "quantidadeCarrinho",
                                            novaQuantidade
                                        );
                                    }}
                                >
                                    +
                                </button>

                            </div>

                            <p className="carrinho-subtotal">
                                Subtotal: R${" "}
                                {(produto.preco * quantidade)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>

                            <p className="carrinho-frete">
                                Frete: Grátis
                            </p>

                            <p className="carrinho-total">
                                Total: R${" "}
                                {(produto.preco * quantidade)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>

                            <button
                                className="btn-remover"
                                onClick={() => {
                                    localStorage.removeItem(
                                        "produtoCarrinho"
                                    );

                                    window.location.reload();
                                }}
                            >
                                Remover produto
                            </button>

                            <Link
                                to="/checkout"
                                className="btn-finalizar"
                            >
                                Finalizar compra
                            </Link>

                        </div>
                    </div>
                ) : (
                    <p>Seu carrinho está vazio.</p>
                )}
            </main>
        </>
    );
}

export default Carrinho;
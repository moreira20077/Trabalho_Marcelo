import Header from "../components/Header";
import "../styles/checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
    const produto = JSON.parse(
        localStorage.getItem("produtoCarrinho")
    );

    const quantidade = Number(
        localStorage.getItem("quantidadeCarrinho") || 1
    );

    return (
        <>
            <Header />

            <main>
                <h1>Finalizar compra</h1>

                <p>Produto: {produto.nome}</p>

                <p>Quantidade: {quantidade}</p>

                <p>
                    Total: R${" "}
                    {(produto.preco * quantidade)
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

                <div className="dados-cliente">
                    <h2>Dados do cliente</h2>

                    <input
                        type="text"
                        placeholder="Nome completo"
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                    />

                    <input
                        type="text"
                        placeholder="CPF"
                    />

                    <input
                        type="tel"
                        placeholder="Telefone"
                    />
                </div>

                <div className="endereco">
                    <h2>Endereço de entrega</h2>

                    <input
                        type="text"
                        placeholder="CEP"
                    />

                    <input
                        type="text"
                        placeholder="Rua"
                    />

                    <input
                        type="text"
                        placeholder="Número"
                    />

                    <input
                        type="text"
                        placeholder="Bairro"
                    />

                    <input
                        type="text"
                        placeholder="Cidade"
                    />

                    <input
                        type="text"
                        placeholder="Estado"
                    />
                </div>

                <div className="pagamento">
                    <h2>Forma de pagamento</h2>

                    <label>
                        <input
                            type="radio"
                            name="pagamento"
                        />
                        PIX
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="pagamento"
                        />
                        Cartão de crédito
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="pagamento"
                        />
                        Boleto
                    </label>
                </div>

                <Link
                    to="/pedido-confirmado"
                    className="btn-finalizar-pedido"
                >
                    Finalizar pedido
                </Link>
            </main>
        </>
    );
}

export default Checkout;
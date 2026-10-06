import Header from "../components/Header";

function PedidoConfirmado() {
    return (
        <>
            <Header />

            <main className="pedido-confirmado">
                <h1>Pedido realizado com sucesso! 🎉</h1>

                <p>Obrigado pela sua compra.</p>

                <p>
                    Seu pedido foi recebido pela HyperTech.
                </p>
            </main>
        </>
    );
}

export default PedidoConfirmado;
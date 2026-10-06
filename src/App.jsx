import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PedidoConfirmado from "./pages/PedidoConfirmado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/pedido-confirmado"
          element={<PedidoConfirmado />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
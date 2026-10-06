import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-links">

          <li className="nav-left">
            <button
              className="menu-button"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              ☰
            </button>

            <a href="/" className="logo">
              HyperTech
            </a>
          </li>

          <li className="nav-mid">
            <input
              type="text"
              placeholder="Pesquisa"
              className="search"
            />
          </li>

          <li className="nav-right">

            <a href="/carrinho" className="header-link">
              🛒 Carrinho
            </a>

            <a href="/login" className="header-link">
              Login
            </a>

          </li>

        </ul>

        {menuAberto && (
          <div className="menu-dropdown">
            <a href="/">Início</a>
            <a href="/catalogo">Catálogo</a>
            <a href="/carrinho">Carrinho</a>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Header;
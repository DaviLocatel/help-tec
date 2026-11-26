import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="cabecalho">
      <nav className="navbar">
        <a href="#" className="logo-link">
          <img src="/hp.png" alt="Logo Help-Tec" className="logo-img" />
          <span className="logo-texto">Help-Tec</span>
        </a>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={menuAberto}
        >
          ☰
        </button>

        <div className={`menu-colapsavel ${menuAberto ? "aberto" : ""}`}>
          <ul className="menu-lista">
            <li><a href="#" className="ativo">Início</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#destaques">Sobre a Equipe</a></li>
            <li><a href="#rodape">Suporte</a></li>
          </ul>

          <div className="painel-usuario-nav">
            <img src="/davi.png" alt="Avatar do Usuário" className="avatar-mini" />
            <div className="info-usuario-nav">
              <span className="nome-usuario-nav">Visitante</span>
              <span className="status-usuario-nav">Modo Loja</span>
            </div>
            <button type="button" className="btn-entrar">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

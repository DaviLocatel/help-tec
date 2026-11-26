import { useState } from "react";

export default function Navbar({
  totalCarrinho,
  onAbrirCarrinho,
  onAbrirUsuario,
  onMudarAba,
  abaAtiva,
}) {
  const [menuAberto, setMenuAberto] = useState(false);

  const navegar = (evento, aba) => {
    evento.preventDefault();
    onMudarAba(aba);
    setMenuAberto(false);
  };

  return (
    <header className="cabecalho">
      <nav className="navbar">
        <a
          href="#inicio"
          className="logo-link"
          onClick={(evento) => navegar(evento, "inicio")}
        >
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
            <li>
              <a
                href="#inicio"
                className={abaAtiva === "inicio" ? "ativo" : ""}
                onClick={(evento) => navegar(evento, "inicio")}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#catalogo"
                className={abaAtiva === "catalogo" ? "ativo" : ""}
                onClick={(evento) => navegar(evento, "catalogo")}
              >
                Catálogo
              </a>
            </li>
            <li>
              <a
                href="#equipe"
                className={abaAtiva === "equipe" ? "ativo" : ""}
                onClick={(evento) => navegar(evento, "equipe")}
              >
                Sobre a Equipe
              </a>
            </li>
            <li>
              <a
                href="#suporte"
                className={abaAtiva === "suporte" ? "ativo" : ""}
                onClick={(evento) => navegar(evento, "suporte")}
              >
                Suporte
              </a>
            </li>
            <li>
              <button
                type="button"
                className="btn-carrinho-nav"
                onClick={onAbrirCarrinho}
              >
                🛒 Carrinho (<span>{totalCarrinho}</span>)
              </button>
            </li>
          </ul>

          <div className="painel-usuario-nav">
            <img src="/davi.png" alt="Avatar do Usuário" className="avatar-mini" />
            <div className="info-usuario-nav">
              <span className="nome-usuario-nav">Visitante</span>
              <span className="status-usuario-nav">Modo Loja</span>
            </div>
            <button type="button" className="btn-entrar" onClick={onAbrirUsuario}>
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

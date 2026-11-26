export default function Hero({ onIrPara }) {
  const navegar = (evento, aba) => {
    evento.preventDefault();
    onIrPara(aba);
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-texto">
        <span className="tag-destaque">Bem-vindo</span>
        <h1>Bem-vindo à Help-Tec</h1>
        <p>
          Somos focados em inovação e no desenvolvimento web de ponta,
          criando sistemas modernos e eficientes para o seu negócio.
        </p>
        <div className="acoes-linha">
          <a
            href="#catalogo"
            className="btn-hero"
            onClick={(evento) => navegar(evento, "catalogo")}
          >
            Abrir Catálogo Interativo
          </a>
          <a
            href="#equipe"
            className="btn-carrinho"
            onClick={(evento) => navegar(evento, "equipe")}
          >
            Conhecer Equipe
          </a>
        </div>
      </div>
      <div className="hero-imagem">
        <img src="/hp.png" alt="Identidade Visual Help-Tec" className="avatar-destaque" />
      </div>
    </section>
  );
}

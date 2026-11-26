export default function Hero() {
  return (
    <section className="hero" id="catalogo">
      <div className="hero-texto">
        <span className="tag-destaque">Bem-vindo</span>
        <h1>Bem-vindo à Help-Tec</h1>
        <p>
          Somos focados em inovação e no desenvolvimento web de ponta,
          criando sistemas modernos e eficientes para o seu negócio.
        </p>
        <div className="acoes-linha">
          <a href="#destaques" className="btn-hero">Abrir Catálogo Interativo</a>
          <a href="#destaques" className="btn-carrinho">Conhecer Equipe</a>
        </div>
      </div>
      <div className="hero-imagem">
        <img src="/hp.png" alt="Identidade Visual Help-Tec" className="avatar-destaque" />
      </div>
    </section>
  );
}

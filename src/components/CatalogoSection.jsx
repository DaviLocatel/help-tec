export default function CatalogoSection({ produtos, onAdicionar }) {
  return (
    <section id="catalogo">
      <header className="topo-pagina">
        <span className="tag-destaque">Hardware &amp; Periféricos</span>
        <h1>Catálogo Help-Tec</h1>
        <p>Selecione os componentes para adicionar ao seu carrinho.</p>
      </header>

      <div className="grade-cards" style={{ marginTop: "20px" }}>
        {produtos.map((produto) => (
          <article className="card card-produto" key={produto.id}>
            <h3>{produto.nome}</h3>
            <p className="preco-card">
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </p>
            <button
              type="button"
              className="btn-primario"
              onClick={() => onAdicionar(produto)}
            >
              + Adicionar ao Carrinho
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

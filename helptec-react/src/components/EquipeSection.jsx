export default function EquipeSection({ membros }) {
  return (
    <section id="equipe">
      <header className="topo-pagina">
        <span className="tag-destaque">Time Help-Tec</span>
        <h1>Nossa Equipe</h1>
        <p>
          Profissionais dedicados a unir excelência em desenvolvimento de
          sistemas e tecnologia avançada.
        </p>
      </header>

      <div className="grade-cards" style={{ marginTop: "20px" }}>
        {membros.map((membro) => (
          <article className="card" key={membro.id}>
            <h3>{membro.nome}</h3>
            <strong>{membro.cargo}</strong>
            <p style={{ marginTop: "8px" }}>{membro.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

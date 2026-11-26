import { useState } from "react";

export default function CardDestaque({ titulo, texto }) {
  const [curtido, setCurtido] = useState(false);

  return (
    <article className="card">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button
        type="button"
        className="btn-entrar"
        style={{ marginTop: "12px" }}
        onClick={() => setCurtido((favoritado) => !favoritado)}
      >
        {curtido ? "★ Destaque Favoritado" : "☆ Favoritar Diferencial"}
      </button>
    </article>
  );
}

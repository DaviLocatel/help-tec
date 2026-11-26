import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardDestaque from "./components/CardDestaque";
import "./App.css";

export default function App() {
  const destaques = [
    {
      id: 1,
      titulo: "Inovação Contínua",
      texto: "Utilizamos tecnologias modernas e metodologias ágeis para entregar projetos de alta qualidade."
    },
    {
      id: 2,
      titulo: "Qualidade Garantida",
      texto: "Unimos hardware de excelência com as melhores práticas de programação e semântica web."
    },
    {
      id: 3,
      titulo: "Foco no Cliente",
      texto: "Atendimento personalizado e soluções sob medida para impulsionar seus resultados digitais."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container-principal">
        <Hero />
        <section className="grade-cards" id="destaques">
          {destaques.map((destaque) => (
            <CardDestaque
              key={destaque.id}
              titulo={destaque.titulo}
              texto={destaque.texto}
            />
          ))}
        </section>
      </main>
      <footer className="rodape" id="rodape">
        <p>&copy; 2026 Help-Tec. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

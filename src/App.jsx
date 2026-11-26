import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardDestaque from "./components/CardDestaque";
import CatalogoSection from "./components/CatalogoSection";
import EquipeSection from "./components/EquipeSection";
import Footer from "./components/Footer";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");
  const [carrinho, setCarrinho] = useState([]);
  const [modalCarrinhoAberto, setModalCarrinhoAberto] = useState(false);
  const [modalLoginAberto, setModalLoginAberto] = useState(false);

  const destaques = [
    {
      id: 1,
      titulo: "Inovação Contínua",
      texto: "Utilizamos tecnologias modernas e metodologias ágeis para entregar projetos de alta qualidade.",
    },
    {
      id: 2,
      titulo: "Qualidade Garantida",
      texto: "Unimos hardware de excelência com as melhores práticas de programação e semântica web.",
    },
    {
      id: 3,
      titulo: "Foco no Cliente",
      texto: "Atendimento personalizado e soluções sob medida para impulsionar seus resultados digitais.",
    },
  ];

  const produtos = [
    { id: 1, nome: "Gabinete Gamer HT-100", preco: 459.9 },
    { id: 2, nome: "Headset Surround Pro", preco: 289.0 },
    { id: 3, nome: "Cadeira Ergonômica Mesh", preco: 1190.0 },
  ];

  const membrosEquipe = [
    {
      id: 1,
      nome: "Davi Locatel",
      cargo: "Desenvolvedor Full-Stack",
      descricao: "Arquitetura Front-End e integração React.",
    },
    {
      id: 2,
      nome: "Equipe Help-Tec",
      cargo: "Engenharia de Sistemas",
      descricao: "Desenvolvimento web e suporte técnico especializado.",
    },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((itens) => [
      ...itens,
      { ...produto, uid: `${produto.id}-${Date.now()}-${Math.random()}` },
    ]);
  };

  const removerDoCarrinho = (uid) => {
    setCarrinho((itens) => itens.filter((item) => item.uid !== uid));
  };

  const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);
  const formatarPreco = (valor) => `R$ ${valor.toFixed(2).replace(".", ",")}`;

  return (
    <>
      <Navbar
        totalCarrinho={carrinho.length}
        onAbrirCarrinho={() => setModalCarrinhoAberto(true)}
        onAbrirUsuario={() => setModalLoginAberto(true)}
        onMudarAba={setAbaAtiva}
        abaAtiva={abaAtiva}
      />

      <main className="container-principal">
        {abaAtiva === "inicio" && (
          <>
            <Hero onIrPara={setAbaAtiva} />
            <section className="grade-cards" id="destaques">
              {destaques.map((item) => (
                <CardDestaque
                  key={item.id}
                  titulo={item.titulo}
                  texto={item.texto}
                />
              ))}
            </section>
          </>
        )}

        {abaAtiva === "catalogo" && (
          <CatalogoSection produtos={produtos} onAdicionar={adicionarAoCarrinho} />
        )}

        {abaAtiva === "equipe" && (
          <EquipeSection membros={membrosEquipe} />
        )}

        {abaAtiva === "suporte" && (
          <section className="card" id="suporte">
            <span className="tag-destaque">Central de Ajuda</span>
            <h1>Suporte Help-Tec</h1>
            <p>
              Entre em contato com nossa equipe técnica para dúvidas sobre
              pedidos ou montagem de hardware.
            </p>
          </section>
        )}
      </main>

      {modalCarrinhoAberto && (
        <div className="fundo-modal aberto" role="dialog" aria-modal="true">
          <div className="modal-conteudo card form-centralizado-largo">
            <button
              type="button"
              className="btn-fechar"
              onClick={() => setModalCarrinhoAberto(false)}
              aria-label="Fechar carrinho"
            >
              X
            </button>
            <h2>🛒 Seu Carrinho</h2>

            {carrinho.length === 0 ? (
              <p className="texto-apoio">Seu carrinho está vazio no momento.</p>
            ) : (
              <>
                <div className="tabela-container">
                  <table className="tabela-carrinho">
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrinho.map((item) => (
                        <tr key={item.uid}>
                          <td>{item.nome}</td>
                          <td>{formatarPreco(item.preco)}</td>
                          <td>
                            <button
                              type="button"
                              className="btn-remover-carrinho"
                              onClick={() => removerDoCarrinho(item.uid)}
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="carrinho-total">
                  Total: <span>{formatarPreco(totalCarrinho)}</span>
                </div>
                <div className="acoes-direita">
                  <button
                    type="button"
                    className="btn-remover"
                    onClick={() => setCarrinho([])}
                  >
                    Esvaziar
                  </button>
                  <button
                    type="button"
                    className="btn-primario"
                    style={{ width: "auto" }}
                    onClick={() => {
                      setCarrinho([]);
                      setModalCarrinhoAberto(false);
                    }}
                  >
                    Finalizar Pedido
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {modalLoginAberto && (
        <div className="fundo-modal aberto" role="dialog" aria-modal="true">
          <div className="modal-conteudo card">
            <button
              type="button"
              className="btn-fechar"
              onClick={() => setModalLoginAberto(false)}
              aria-label="Fechar login"
            >
              X
            </button>
            <h2>Acesso Help-Tec</h2>
            <p className="texto-apoio">
              Contas @helptec.com.br ativam o painel de desenvolvedor.
            </p>
            <form
              onSubmit={(evento) => {
                evento.preventDefault();
                setModalLoginAberto(false);
              }}
            >
              <div className="campo-grupo">
                <label htmlFor="modal-login-email">E-mail</label>
                <input
                  type="email"
                  id="modal-login-email"
                  placeholder="nome@email.com"
                />
              </div>
              <div className="campo-grupo">
                <label htmlFor="modal-login-senha">Senha</label>
                <input
                  type="password"
                  id="modal-login-senha"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>
              <button type="submit" className="btn-primario">
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

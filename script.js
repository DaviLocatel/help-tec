function criarImagemSvgProduto(icone, titulo, corFundo1, corFundo2) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${corFundo1}"/>
        <stop offset="100%" stop-color="${corFundo2}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#g)"/>
    <circle cx="200" cy="96" r="54" fill="rgba(16, 185, 129, 0.14)" stroke="rgba(52, 211, 153, 0.35)" stroke-width="2"/>
    <text x="200" y="114" font-size="50" text-anchor="middle">${icone}</text>
    <text x="200" y="196" font-family="sans-serif" font-size="17" font-weight="bold" fill="#f8fafc" text-anchor="middle">${titulo}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const itensPadrao = [
  { id: 1, nome: 'PC Gamer T-Moba (HT-101)', categoria: 'computadores', valorOriginal: 2499, valor: 2499, imagem: 'pcgamer.png' },
  { id: 2, nome: 'Placa-Mãe B550M Aorus (HT-202)', categoria: 'hardware', valorOriginal: 999, valor: 999, imagem: 'placa-mãe.png' },
  { id: 3, nome: 'PC Workstation PRO (HT-303)', categoria: 'computadores', valorOriginal: 7199, valor: 7199, imagem: 'workstation.png' },
  { id: 4, nome: 'Monitor Gamer Curvo 144Hz (HT-404)', categoria: 'perifericos', valorOriginal: 1299, valor: 1299, imagem: 'monitor.png' },
  { id: 5, nome: 'Teclado Mecânico RGB (HT-505)', categoria: 'perifericos', valorOriginal: 349, valor: 349, imagem: 'teclado.png' },
  { id: 6, nome: 'Mouse Gamer Ultraleve 16000 DPI (HT-606)', categoria: 'perifericos', valorOriginal: 229, valor: 229, imagem: 'mouse.png' },
  { id: 7, nome: 'Headset Surround 7.1 RGB (HT-707)', categoria: 'perifericos', valorOriginal: 389, valor: 389, imagem: 'headset.png' },
  { id: 8, nome: 'Processador AMD Ryzen 9 (HT-808)', categoria: 'hardware', valorOriginal: 2199, valor: 2199, imagem: 'processador.png' },
  { id: 9, nome: 'SSD NVMe M.2 1TB 5000MB/s (HT-909)', categoria: 'hardware', valorOriginal: 489, valor: 489, imagem: 'ssd.png' },
  { id: 10, nome: 'Notebook Gamer Nitro i7 16GB (HT-110)', categoria: 'computadores', valorOriginal: 5499, valor: 5499, imagem: 'notbook.png' },
  { id: 11, nome: 'Gabinete Aquário Mid-Tower 4 Fans (HT-211)', categoria: 'hardware', valorOriginal: 429, valor: 429, imagem: 'gabinete.png' },
  { id: 12, nome: 'Cadeira Gamer Ergonômica Pro (HT-312)', categoria: 'perifericos', valorOriginal: 949, valor: 949, imagem: 'cadeira.png' }
];

const equipePadrao = {
  davi: {
    chave: 'davi',
    nome: 'Davi Locatel',
    cargo: 'CEO & Desenvolvedor de Sistemas',
    idade: '16 anos',
    habilidade: 'Desenvolver sistemas utilizando IA com prompts profissionais.',
    frase: '"EU VOU ENTRAR NO SISTEMA DO SENAC E ME AUTO PASSAR NESSE CURSO"',
    recado: 'Olá professora, em breve estarei no sistema do Senac. Sou o mais mais!',
    resumoHero: 'Profissionais dedicados a unir excelência em desenvolvimento de sistemas e tecnologia avançada.',
    foto: 'davi.jpg'
  }
};

const contasPadrao = [
  {
    nome: 'Davi Locatel',
    email: 'ceo@helptec.com.br',
    cpf: '000.000.000-00',
    nascimento: '2010-01-01',
    senha: 'helptec123',
    papel: 'ceo',
    foto: 'davi.jpg'
  },
  {
    nome: 'Funcionário Help-Tec',
    email: 'func@helptec.com.br',
    cpf: '111.111.111-11',
    nascimento: '2000-05-10',
    senha: 'func123',
    papel: 'admin',
    foto: 'usuario.jpg'
  }
];

const configSitePadrao = {
  nomeEmpresa: 'Help-Tec',
  tituloInicio: 'Bem-vindo à Help-Tec',
  textoInicio: 'Somos focados em inovação e no desenvolvimento web de ponta, criando sistemas modernos e eficientes para o seu negócio.',
  tituloCatalogo: 'Catálogo de Produtos Help-Tec',
  avisoGlobal: '',
  corPrimaria: '',
  corNeon: '',
  corFundo: ''
};

function buscarElemento(seletor) {
  const elemento = document.querySelector(seletor);
  if (!elemento) {
    throw new Error(`Elemento ${seletor} não existe no HTML desta página`);
  }
  return elemento;
}

function calcularMediaValores(valores) {
  if (!Array.isArray(valores) || valores.length === 0) {
    throw new Error('Informe um array com ao menos um valor para calcular a média');
  }
  return valores.reduce((soma, v) => soma + Number(v), 0) / valores.length;
}

function aplicarDescontoSeguro(valorBase, percentual) {
  if (isNaN(percentual) || percentual <= 0 || percentual >= 100) {
    throw new Error('A porcentagem de desconto deve estar entre 1% e 99%');
  }
  return Number((valorBase * (1 - percentual / 100)).toFixed(2));
}

function extrairApenasNumeros(texto) {
  let numeros = '';
  const str = String(texto);
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c >= '0' && c <= '9') {
      numeros += c;
    }
  }
  return numeros;
}

function formatarCpfPuro(texto) {
  const d = extrairApenasNumeros(texto).slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9, 11)}`;
}

function avaliarForcaSenhaPura(senha) {
  if (senha.length === 0) return 0;
  let temNumero = false;
  let temSimbolo = false;

  for (let i = 0; i < senha.length; i++) {
    const c = senha[i];
    const ehNumero = c >= '0' && c <= '9';
    const ehMinuscula = c >= 'a' && c <= 'z';
    const ehMaiuscula = c >= 'A' && c <= 'Z';

    if (ehNumero) {
      temNumero = true;
    } else if (!ehMinuscula && !ehMaiuscula) {
      temSimbolo = true;
    }
  }

  let pts = 0;
  if (senha.length >= 8) pts++;
  if (temNumero) pts++;
  if (temSimbolo) pts++;
  return pts;
}

function lerJsonSeguro(chave, padrao) {
  let resultado = padrao;
  try {
    const bruto = localStorage.getItem(chave);
    if (bruto) {
      resultado = JSON.parse(bruto);
    }
  } catch (erro) {
    console.error(`Falha ao ler os dados da chave ${chave}:`, erro.message);
    resultado = padrao;
  } finally {
    if (resultado === null || resultado === undefined) {
      resultado = padrao;
    }
  }
  return resultado;
}

localStorage.removeItem('ht_carrinho');
localStorage.removeItem('ht_carrinho_visitante');

let bancoContas = lerJsonSeguro('ht_contas', contasPadrao);
let itens = lerJsonSeguro('ht_itens', itensPadrao);
let sessaoAtual = lerJsonSeguro('ht_sessao', { nome: 'Visitante', papel: 'visitante', email: '', foto: 'usuario.jpg' });

const obterChaveCarrinhoAtual = () => {
  if (!sessaoAtual || sessaoAtual.papel === 'visitante' || !sessaoAtual.email) {
    return '';
  }
  return `ht_carrinho_${sessaoAtual.email.toLowerCase()}`;
};

let carrinhoCompras = sessaoAtual.papel === 'visitante' ? [] : lerJsonSeguro(obterChaveCarrinhoAtual(), []);
let chamadosSuporte = lerJsonSeguro('ht_chamados', []);
let dadosEquipe = lerJsonSeguro('ht_equipe', equipePadrao);
let configSite = lerJsonSeguro('ht_config_site', configSitePadrao);
let pedidosRealizados = lerJsonSeguro('ht_pedidos', []);

const normalizarModalPerfilUnico = () => {
  const telaPerfil = document.querySelector('#tela-perfil-modal');
  if (!telaPerfil) return;

  telaPerfil.innerHTML = `
    <div class="perfil-cabecalho">
      <img src="usuario.jpg" alt="Foto do Usuário" class="avatar-grande">
      <h2 id="perfil-nome-exibicao">Visitante</h2>
      <span id="perfil-cargo-exibicao" class="tag-destaque">Cliente</span>
    </div>
    <div class="perfil-detalhes">
      <p><strong>E-mail:</strong> <span id="perfil-email-exibicao"></span></p>
      <p><strong>Status:</strong> Sessão Ativa</p>
    </div>
    <form id="form-edicao-perfil" class="painel-edicao-perfil" style="margin-top: 12px; padding: 12px; background: var(--cor-fundo); border: 1px solid var(--cor-borda); border-radius: 8px; display: flex; flex-direction: column; gap: 8px;">
      <strong style="color: var(--cor-neon); font-size: 13px;">⚙️ Personalizar Minha Conta</strong>
      <div class="campo-grupo" style="margin-bottom: 4px;">
        <label for="edit-perfil-nome" style="font-size: 12px;">Nome</label>
        <input type="text" id="edit-perfil-nome" placeholder="Seu nome" style="padding: 8px; font-size: 13px;">
      </div>
      <div class="campo-grupo" style="margin-bottom: 4px;">
        <label for="edit-perfil-email" style="font-size: 12px;">E-mail</label>
        <input type="email" id="edit-perfil-email" placeholder="seu@email.com" style="padding: 8px; font-size: 13px;">
      </div>
      <div class="campo-grupo" style="margin-bottom: 4px;">
        <label for="edit-perfil-senha" style="font-size: 12px;">Nova Senha (opcional)</label>
        <input type="password" id="edit-perfil-senha" placeholder="Deixe vazio para manter" style="padding: 8px; font-size: 13px;">
      </div>
      <div class="campo-grupo" style="margin-bottom: 4px;">
        <label for="edit-perfil-foto-url" style="font-size: 12px;">Foto (nome do arquivo ou URL)</label>
        <input type="text" id="edit-perfil-foto-url" placeholder="Ex: davi.jpg ou usuario.jpg" style="padding: 8px; font-size: 13px;">
      </div>
      <button type="submit" class="btn-primario" style="padding: 8px; font-size: 13px;">Salvar Alterações</button>
      <p id="aviso-perfil-salvo" class="aviso-sucesso" style="font-size: 12px; margin-top: 2px; min-height: 16px;"></p>
    </form>
    <button type="button" id="btn-sair-conta" class="btn-remover" style="width: 100%; margin-top: 12px;">Sair da Conta</button>
  `;
};

normalizarModalPerfilUnico();

const sincronizarPrecosDoCarrinho = () => {
  if (!Array.isArray(carrinhoCompras) || sessaoAtual.papel === 'visitante') {
    carrinhoCompras = [];
    return;
  }
  carrinhoCompras = carrinhoCompras
    .map((itemCarrinho) => {
      const produtoAtual = itens.find((p) => p.id === itemCarrinho.id);
      return produtoAtual ? { ...produtoAtual } : null;
    })
    .filter((item) => item !== null);
};

const normalizarDadosSalvos = () => {
  if (dadosEquipe.lucas) delete dadosEquipe.lucas;
  if (!dadosEquipe.davi) dadosEquipe.davi = equipePadrao.davi;
  if (!configSite || typeof configSite !== 'object') configSite = { ...configSitePadrao };
  if (!Array.isArray(pedidosRealizados)) pedidosRealizados = [];

  itensPadrao.forEach((padrao) => {
    const existente = itens.find((i) => i.id === padrao.id);
    if (!existente) {
      itens.push({ ...padrao });
    } else {
      existente.imagem = padrao.imagem;
      existente.nome = padrao.nome;
    }
  });

  itens = itens.map((item) => {
    const padraoCorrespondente = itensPadrao.find((p) => p.id === item.id);
    const imgPadrao = padraoCorrespondente ? padraoCorrespondente.imagem : criarImagemSvgProduto('📦', item.nome.slice(0, 18), '#0f172a', '#064e3b');
    const base = item.valorOriginal !== undefined && Number(item.valorOriginal) > 0 ? Number(item.valorOriginal) : (Number(item.valor) > 0 ? Number(item.valor) : 999);
    const atual = item.valor !== undefined && Number(item.valor) > 0 ? Number(item.valor) : base;
    return {
      id: item.id,
      nome: item.nome,
      categoria: item.categoria,
      valorOriginal: base,
      valor: atual,
      imagem: item.imagem || imgPadrao
    };
  });

  contasPadrao.forEach((cp) => {
    const idx = bancoContas.findIndex((c) => c.email.toLowerCase() === cp.email.toLowerCase());
    if (idx === -1) bancoContas.push(cp);
  });

  if (sessaoAtual.papel !== 'visitante') {
    const ehDavi = sessaoAtual.email.toLowerCase() === 'ceo@helptec.com.br' ||
                   sessaoAtual.email.toLowerCase() === 'davi@helptec.com.br' ||
                   sessaoAtual.nome.toLowerCase().includes('davi');
    if (ehDavi) sessaoAtual.papel = 'ceo';
    if (!sessaoAtual.foto) sessaoAtual.foto = ehDavi ? 'davi.jpg' : 'usuario.jpg';
  } else {
    sessaoAtual.foto = 'usuario.jpg';
    carrinhoCompras = [];
  }
  sincronizarPrecosDoCarrinho();
};

normalizarDadosSalvos();

const salvarMemoria = () => {
  try {
    localStorage.setItem('ht_contas', JSON.stringify(bancoContas));
    localStorage.setItem('ht_itens', JSON.stringify(itens));
    localStorage.setItem('ht_sessao', JSON.stringify(sessaoAtual));
    const chaveCarrinho = obterChaveCarrinhoAtual();
    if (chaveCarrinho !== '') {
      localStorage.setItem(chaveCarrinho, JSON.stringify(carrinhoCompras));
    }
    localStorage.setItem('ht_chamados', JSON.stringify(chamadosSuporte));
    localStorage.setItem('ht_equipe', JSON.stringify(dadosEquipe));
    localStorage.setItem('ht_config_site', JSON.stringify(configSite));
    localStorage.setItem('ht_pedidos', JSON.stringify(pedidosRealizados));
  } catch (erro) {
    console.error('Falha ao salvar dados no navegador:', erro.message);
  }
};

salvarMemoria();

const recarregarMemoria = () => {
  bancoContas = lerJsonSeguro('ht_contas', contasPadrao);
  itens = lerJsonSeguro('ht_itens', itensPadrao);
  sessaoAtual = lerJsonSeguro('ht_sessao', { nome: 'Visitante', papel: 'visitante', email: '', foto: 'usuario.jpg' });
  const chaveCarrinho = obterChaveCarrinhoAtual();
  carrinhoCompras = chaveCarrinho === '' ? [] : lerJsonSeguro(chaveCarrinho, []);
  chamadosSuporte = lerJsonSeguro('ht_chamados', []);
  dadosEquipe = lerJsonSeguro('ht_equipe', equipePadrao);
  configSite = lerJsonSeguro('ht_config_site', configSitePadrao);
  pedidosRealizados = lerJsonSeguro('ht_pedidos', []);
  normalizarDadosSalvos();
};

const estaNaPaginaAtendimentos = () => {
  return Boolean(document.querySelector('#painel-atendimentos-ativo'));
};

const estaNaPaginaPedidos = () => {
  return Boolean(document.querySelector('#lista-pedidos-rastreio'));
};

const aplicarConfiguracoesGlobaisDoCeo = () => {
  recarregarMemoria();

  if (configSite.corPrimaria) {
    document.documentElement.style.setProperty('--cor-primaria', configSite.corPrimaria);
  } else {
    document.documentElement.style.removeProperty('--cor-primaria');
  }

  if (configSite.corNeon) {
    document.documentElement.style.setProperty('--cor-neon', configSite.corNeon);
  } else {
    document.documentElement.style.removeProperty('--cor-neon');
  }

  if (configSite.corFundo) {
    document.documentElement.style.setProperty('--cor-fundo', configSite.corFundo);
  } else {
    document.documentElement.style.removeProperty('--cor-fundo');
  }

  document.querySelectorAll('.logo-texto').forEach((el) => {
    el.textContent = configSite.nomeEmpresa || 'Help-Tec';
  });

  const ehPaginaEquipe = Boolean(document.querySelector('#grade-equipe-dinamica'));
  if (!ehPaginaEquipe) {
    const h1Hero = document.querySelector('.hero-texto h1');
    const pHero = document.querySelector('.hero-texto p');
    if (h1Hero && configSite.tituloInicio) h1Hero.textContent = configSite.tituloInicio;
    if (pHero && configSite.textoInicio) pHero.textContent = configSite.textoInicio;
  }

  const ehPaginaCatalogo = Boolean(document.querySelector('#lista-cards'));
  if (ehPaginaCatalogo) {
    const h1Cat = document.querySelector('.topo-pagina h1');
    if (h1Cat && configSite.tituloCatalogo) h1Cat.textContent = configSite.tituloCatalogo;
  }

  let bannerAviso = document.querySelector('#banner-aviso-ceo');
  if (configSite.avisoGlobal && configSite.avisoGlobal.trim() !== '') {
    if (!bannerAviso) {
      bannerAviso = document.createElement('div');
      bannerAviso.id = 'banner-aviso-ceo';
      bannerAviso.style.cssText = 'background-color: var(--cor-primaria); color: #06130e; text-align: center; padding: 8px 16px; font-weight: bold; font-size: 14px;';
      document.body.insertBefore(bannerAviso, document.body.firstChild);
    }
    bannerAviso.textContent = `👑 Comunicado Oficial (${configSite.nomeEmpresa}): ${configSite.avisoGlobal}`;
  } else if (bannerAviso) {
    bannerAviso.remove();
  }
};

const obterHoraAtual = () => {
  const agora = new Date();
  return `${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}`;
};

const formatarMoeda = (valor) => {
  return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const mostrarErro = (campo, mensagem) => {
  if (!campo) return;
  const spanErro = document.querySelector(`#erro-${campo.id}`);
  if (spanErro) spanErro.textContent = mensagem;
  campo.style.borderColor = mensagem ? '#f87171' : '';
};

const ehFuncionarioOuCeo = () => {
  return sessaoAtual.papel === 'admin' || sessaoAtual.papel === 'ceo';
};

const aplicarAvatarComFallback = (imgElement, caminhoFoto) => {
  if (!imgElement) return;
  imgElement.src = caminhoFoto || 'usuario.jpg';
  imgElement.onerror = () => {
    if (!imgElement.src.includes('davi.jpg') && sessaoAtual.papel === 'ceo') {
      imgElement.src = 'davi.jpg';
    } else if (!imgElement.src.includes('hp.png')) {
      imgElement.src = 'hp.png';
    }
  };
};

const garantirCamposCheckoutNoCarrinho = () => {
  const modalCarrinho = document.querySelector('#modal-carrinho');
  if (!modalCarrinho || document.querySelector('#bloco-checkout-pagamento')) return;

  const acoesDireita = modalCarrinho.querySelector('.acoes-direita');
  if (!acoesDireita) return;

  const divCheckout = document.createElement('div');
  divCheckout.id = 'bloco-checkout-pagamento';
  divCheckout.className = 'checkout-opcoes-grid';
  divCheckout.innerHTML = `
    <div class="campo-grupo" style="margin-bottom: 0;">
      <label for="checkout-metodo-pagamento" style="font-size: 12px;">💳 Método de Pagamento</label>
      <select id="checkout-metodo-pagamento" style="padding: 8px; font-size: 13px;">
        <option value="PIX Instantâneo">PIX Instantâneo (Aprovação Imediata)</option>
        <option value="Cartão de Crédito">Cartão de Crédito (Até 12x)</option>
        <option value="Cartão de Débito">Cartão de Débito</option>
        <option value="Boleto Bancário">Boleto Bancário</option>
      </select>
    </div>
    <div class="campo-grupo" style="margin-bottom: 0;">
      <label for="checkout-nome-recebedor" style="font-size: 12px;">🔒 Quem Recebe (Recebedor Oficial Fixo)</label>
      <input type="text" id="checkout-nome-recebedor" value="Help-Tec Pagamentos LTDA" readonly disabled style="padding: 8px; font-size: 13px; background-color: var(--cor-superficie); color: var(--cor-neon); font-weight: bold; opacity: 0.85; cursor: not-allowed;">
    </div>
  `;

  acoesDireita.parentNode.insertBefore(divCheckout, acoesDireita);
};

const restaurarVisaoPadraoModalCarrinho = () => {
  const modalCarrinho = document.querySelector('#modal-carrinho');
  if (!modalCarrinho) return;
  const tabelaContainer = modalCarrinho.querySelector('.tabela-container');
  const blocoCheckout = modalCarrinho.querySelector('#bloco-checkout-pagamento');
  const totalBox = modalCarrinho.querySelector('.carrinho-total');
  const reciboAntigo = modalCarrinho.querySelector('#danfe-container-dinamico');

  if (carrinhoCompras.length > 0 || !reciboAntigo) {
    if (tabelaContainer) tabelaContainer.classList.remove('escondido');
    if (blocoCheckout) blocoCheckout.classList.remove('escondido');
    if (totalBox) totalBox.classList.remove('escondido');
  }
};

const garantirElementosNavbarFuncionario = () => {
  const menuLista = document.querySelector('.menu-lista');
  const painelUsuarioNav = document.querySelector('.painel-usuario-nav');

  if (menuLista && !document.querySelector('#li-nav-pedidos')) {
    const liPedidos = document.createElement('li');
    liPedidos.id = 'li-nav-pedidos';
    const ativaPed = estaNaPaginaPedidos() ? 'ativo' : '';
    liPedidos.innerHTML = `<a href="pedidos.html" class="${ativaPed}">📦 Pedidos</a>`;
    const btnCarrinho = document.querySelector('#btn-abrir-carrinho');
    const liCarrinho = btnCarrinho ? btnCarrinho.closest('li') : null;
    if (liCarrinho) {
      menuLista.insertBefore(liPedidos, liCarrinho);
    } else {
      menuLista.appendChild(liPedidos);
    }
  }

  if (menuLista && !document.querySelector('#li-nav-atendimentos')) {
    const liAtend = document.createElement('li');
    liAtend.id = 'li-nav-atendimentos';
    liAtend.className = 'escondido';
    const paginaAtiva = estaNaPaginaAtendimentos() ? 'ativo' : '';
    liAtend.innerHTML = `<a href="atendimentos.html" class="${paginaAtiva}">🎧 Atendimentos</a>`;
    menuLista.appendChild(liAtend);
  }

  if (painelUsuarioNav && !document.querySelector('#container-sino')) {
    const sinoDiv = document.createElement('div');
    sinoDiv.id = 'container-sino';
    sinoDiv.className = 'sino-wrapper escondido';
    sinoDiv.innerHTML = `
      <button type="button" id="btn-sino" class="btn-sino" aria-label="Notificações de Atendimento">
        🔔
        <span id="badge-sino" class="badge-exclamacao escondido">!</span>
      </button>
      <div id="painel-notificacoes" class="dropdown-notificacoes escondido">
        <h4>Solicitações de Clientes</h4>
        <div id="lista-notificacoes" class="lista-notificacoes"></div>
      </div>
    `;
    painelUsuarioNav.appendChild(sinoDiv);

    const btnSino = sinoDiv.querySelector('#btn-sino');
    const painelNotif = sinoDiv.querySelector('#painel-notificacoes');
    btnSino.addEventListener('click', (e) => {
      e.stopPropagation();
      atualizarNotificacoesFuncionario();
      painelNotif.classList.toggle('escondido');
    });
    document.addEventListener('click', (e) => {
      if (!sinoDiv.contains(e.target)) painelNotif.classList.add('escondido');
    });
  }

  if (!document.querySelector('#popup-celeste-global')) {
    const popup = document.createElement('div');
    popup.id = 'popup-celeste-global';
    popup.className = 'popup-celeste escondido';
    popup.innerHTML = `
      <div class="popup-celeste-topo">
        <div class="popup-celeste-info">
          <img src="hp.png" alt="Celeste IA" class="popup-celeste-avatar">
          <strong style="color: var(--cor-neon); font-size: 14px;">Celeste IA · Alerta Ao Vivo</strong>
        </div>
        <button type="button" id="btn-fechar-popup-celeste" class="btn-fechar" style="position: static;">X</button>
      </div>
      <p id="texto-popup-celeste" style="font-size: 13px; color: var(--cor-texto);"></p>
      <a href="atendimentos.html" id="btn-ir-atendimento-popup" class="btn-primario" style="padding: 8px; font-size: 13px; text-align: center; text-decoration: none; display: block;">Abrir Chat com Cliente</a>
    `;
    document.body.appendChild(popup);

    popup.querySelector('#btn-fechar-popup-celeste').addEventListener('click', () => {
      popup.classList.add('escondido');
    });
  }

  garantirCamposCheckoutNoCarrinho();
};

const atualizarNotificacoesFuncionario = () => {
  recarregarMemoria();
  const containerSino = document.querySelector('#container-sino');
  const badgeSino = document.querySelector('#badge-sino');
  const listaNotif = document.querySelector('#lista-notificacoes');
  const popupCeleste = document.querySelector('#popup-celeste-global');
  const textoPopup = document.querySelector('#texto-popup-celeste');

  if (!containerSino || !ehFuncionarioOuCeo()) {
    if (containerSino) containerSino.classList.add('escondido');
    if (popupCeleste) popupCeleste.classList.add('escondido');
    return;
  }
  containerSino.classList.remove('escondido');

  const naPaginaAtendimentos = estaNaPaginaAtendimentos();
  if (naPaginaAtendimentos) {
    let alterou = false;
    chamadosSuporte.forEach((ch) => {
      if (ch.naoLidoAdmin) { ch.naoLidoAdmin = false; ch.popupExibido = true; alterou = true; }
    });
    if (alterou) salvarMemoria();
  }

  const pendentes = chamadosSuporte.filter((ch) => ch.naoLidoAdmin && ch.status === 'aberto');
  if (badgeSino) {
    if (pendentes.length > 0 && !naPaginaAtendimentos) {
      badgeSino.classList.remove('escondido');
    } else {
      badgeSino.classList.add('escondido');
    }
  }

  const naoExibidosNoPopup = chamadosSuporte.filter((ch) => !ch.popupExibido && ch.status === 'aberto' && !naPaginaAtendimentos);
  if (naoExibidosNoPopup.length > 0 && popupCeleste && textoPopup) {
    const ultimo = naoExibidosNoPopup[naoExibidosNoPopup.length - 1];
    textoPopup.innerHTML = `Olá, <strong>${sessaoAtual.nome}</strong>! O cliente <strong>${ultimo.clienteNome}</strong> solicitou atendimento humanizado.`;
    popupCeleste.classList.remove('escondido');
    naoExibidosNoPopup.forEach((ch) => {
      ch.popupExibido = true;
    });
    salvarMemoria();
  }

  if (listaNotif) {
    listaNotif.innerHTML = '';
    if (chamadosSuporte.length === 0) {
      listaNotif.innerHTML = '<p style="font-size: 12px; color: var(--cor-texto-suave);">Nenhuma solicitação no momento.</p>';
    } else {
      chamadosSuporte.slice().reverse().forEach((ch) => {
        const ultimaMsg = ch.mensagens[ch.mensagens.length - 1];
        const linkItem = document.createElement('a');
        linkItem.href = 'atendimentos.html';
        linkItem.className = 'item-notificacao';
        linkItem.style.textDecoration = 'none';
        linkItem.style.display = 'block';
        linkItem.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <strong style="color: var(--cor-neon);">${ch.clienteNome}</strong>
            <span style="font-size:11px; color: var(--cor-texto-suave);">${ultimaMsg ? ultimaMsg.hora : ''}</span>
          </div>
          <p style="font-size:12px; color: var(--cor-texto);">${ultimaMsg ? ultimaMsg.texto : 'Solicitou atendimento'}</p>
        `;
        linkItem.addEventListener('click', () => {
          localStorage.setItem('ht_chamado_selecionado', String(ch.id));
          ch.naoLidoAdmin = false;
          salvarMemoria();
        });
        listaNotif.appendChild(linkItem);
      });
    }
  }
};

const preencherCamposModalPerfil = () => {
  const inNome = document.querySelector('#edit-perfil-nome');
  const inEmail = document.querySelector('#edit-perfil-email');
  const inSenha = document.querySelector('#edit-perfil-senha');
  const inFoto = document.querySelector('#edit-perfil-foto-url');
  const aviso = document.querySelector('#aviso-perfil-salvo');
  if (inNome) inNome.value = sessaoAtual.nome || '';
  if (inEmail) inEmail.value = sessaoAtual.email || '';
  if (inFoto) inFoto.value = sessaoAtual.foto || 'usuario.jpg';
  if (inSenha) inSenha.value = '';
  if (aviso) aviso.textContent = '';
};

const calcularEtapaPedidoPorTempo = (criadoEm) => {
  const agora = Date.now();
  const diffMs = agora - Number(criadoEm);
  const minutosPassados = Math.max(0, Math.floor(diffMs / 60000));

  if (minutosPassados < 10) {
    return {
      codigo: 1,
      statusTexto: 'Pedido Solicitado',
      corTag: '#38bdf8',
      minutosPassados: minutosPassados,
      detalheTempo: `Solicitado há ${minutosPassados} min · Envio previsto em ${10 - minutosPassados} min`
    };
  }
  if (minutosPassados < 20) {
    return {
      codigo: 2,
      statusTexto: 'Pedido Enviado',
      corTag: '#fbbf24',
      minutosPassados: minutosPassados,
      detalheTempo: `Enviado há ${minutosPassados - 10} min · Entrega prevista em ${20 - minutosPassados} min`
    };
  }
  return {
    codigo: 3,
    statusTexto: 'Pedido Entregue',
    corTag: '#34d399',
    minutosPassados: minutosPassados,
    detalheTempo: `Entregue com sucesso (${minutosPassados} min após a solicitação)`
  };
};

const renderizarPaginaPedidos = () => {
  const containerPedidos = document.querySelector('#lista-pedidos-rastreio');
  if (!containerPedidos) return;
  recarregarMemoria();

  if (sessaoAtual.papel === 'visitante') {
    containerPedidos.innerHTML = `
      <div class="card">
        <h3>🔒 Faça Login para Rastrear Seus Pedidos</h3>
        <p style="color: var(--cor-texto-suave); margin-top: 6px;">Entre na sua conta para visualizar seus recibos e acompanhar a entrega em tempo real.</p>
      </div>
    `;
    return;
  }

  const pedidosVisiveis = ehFuncionarioOuCeo()
    ? pedidosRealizados
    : pedidosRealizados.filter((p) => p.compradorEmail.toLowerCase() === (sessaoAtual.email || '').toLowerCase());

  containerPedidos.innerHTML = '';

  if (pedidosVisiveis.length === 0) {
    containerPedidos.innerHTML = `
      <div class="card">
        <h3>Nenhum pedido encontrado nesta conta</h3>
        <p style="color: var(--cor-texto-suave); margin-top: 6px;">Adicione equipamentos no Catálogo e finalize a compra no Carrinho para gerar seu recibo e acompanhar a entrega ao vivo (Solicitado → Enviado em 10 min → Entregue em 20 min).</p>
        <a href="produtos.html" class="btn-primario" style="display: inline-block; width: auto; margin-top: 12px; text-decoration: none;">Ir para o Catálogo</a>
      </div>
    `;
    return;
  }

  pedidosVisiveis.slice().reverse().forEach((pedido) => {
    const infoEtapa = calcularEtapaPedidoPorTempo(pedido.criadoEm);
    const card = document.createElement('article');
    card.className = 'card-pedido-rastreio';

    const classeEtapa1 = infoEtapa.codigo === 1 ? 'etapa-rastreio atual' : 'etapa-rastreio concluida';
    const classeEtapa2 = infoEtapa.codigo === 2 ? 'etapa-rastreio atual' : (infoEtapa.codigo > 2 ? 'etapa-rastreio concluida' : 'etapa-rastreio');
    const classeEtapa3 = infoEtapa.codigo === 3 ? 'etapa-rastreio atual' : 'etapa-rastreio';

    const itensReciboHtml = pedido.itens.map((it) => `
      <li class="danfe-item">
        <span>${it.nome}</span>
        <strong>${formatarMoeda(it.valor)}</strong>
      </li>
    `).join('');

    card.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; border-bottom: 1px solid var(--cor-borda); padding-bottom: 12px;">
        <div>
          <span class="tag-destaque">Pedido #${pedido.protocolo}</span>
          <h3 style="margin-top: 6px;">Status Ao Vivo: <span style="color: ${infoEtapa.corTag};">${infoEtapa.statusTexto}</span></h3>
          <small style="color: var(--cor-texto-suave);">${infoEtapa.detalheTempo}</small>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn-carrinho btn-voltar-tempo-pedido" data-id="${pedido.id}" style="font-size: 12px; padding: 6px 10px;">⏪ Voltar -10 Min</button>
          <button type="button" class="btn-carrinho btn-avancar-tempo-pedido" data-id="${pedido.id}" style="font-size: 12px; padding: 6px 10px;">⏩ Avançar +10 Min</button>
          <button type="button" class="btn-remover btn-resetar-tempo-pedido" data-id="${pedido.id}" style="margin-top: 0; font-size: 12px; padding: 6px 10px;">🔄 Resetar (0 min)</button>
        </div>
      </div>

      <div class="rastreio-linha-tempo">
        <div class="${classeEtapa1}">
          <strong style="color: var(--cor-texto);">1. Pedido Solicitado</strong>
          <span style="font-size: 12px; color: var(--cor-texto-suave);">0 min · Pagamento confirmado e separado</span>
        </div>
        <div class="${classeEtapa2}">
          <strong style="color: var(--cor-texto);">2. Pedido Enviado</strong>
          <span style="font-size: 12px; color: var(--cor-texto-suave);">+10 min · Em trânsito para o endereço</span>
        </div>
        <div class="${classeEtapa3}">
          <strong style="color: var(--cor-texto);">3. Pedido Entregue</strong>
          <span style="font-size: 12px; color: var(--cor-texto-suave);">+20 min · Recebido no destino final</span>
        </div>
      </div>

      <div class="recibo-detalhado-box">
        <strong style="color: var(--cor-neon); font-size: 14px;">🧾 Recibo Oficial da Compra · Confirmado às ${pedido.horaFormatada}</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; margin: 4px 0;">
          <p><strong>👤 Quem Comprou:</strong> ${pedido.compradorNome}</p>
          <p><strong>🏢 Quem Recebeu:</strong> ${pedido.recebedorNome}</p>
          <p><strong>💳 Método de Pagamento:</strong> ${pedido.metodoPagamento}</p>
        </div>
        <strong style="font-size: 12px; color: var(--cor-texto-suave); margin-top: 4px;">Custo Individual de Cada Produto:</strong>
        <ul class="danfe-lista">${itensReciboHtml}</ul>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid var(--cor-borda);">
          <span>Status do Pagamento: <strong style="color: var(--cor-neon);">Confirmado</strong></span>
          <strong style="color: var(--cor-neon); font-size: 16px;">Valor Total: ${formatarMoeda(pedido.total)}</strong>
        </div>
      </div>
    `;

    containerPedidos.appendChild(card);
  });

  containerPedidos.querySelectorAll('.btn-avancar-tempo-pedido').forEach((btn) => {
    btn.addEventListener('click', () => {
      recarregarMemoria();
      const idAlvo = Number(btn.dataset.id);
      const ped = pedidosRealizados.find((p) => p.id === idAlvo);
      if (ped) {
        ped.criadoEm = Number(ped.criadoEm) - 600000;
        salvarMemoria();
        renderizarPaginaPedidos();
      }
    });
  });

  containerPedidos.querySelectorAll('.btn-voltar-tempo-pedido').forEach((btn) => {
    btn.addEventListener('click', () => {
      recarregarMemoria();
      const idAlvo = Number(btn.dataset.id);
      const ped = pedidosRealizados.find((p) => p.id === idAlvo);
      if (ped) {
        const agora = Date.now();
        ped.criadoEm = Math.min(agora, Number(ped.criadoEm) + 600000);
        salvarMemoria();
        renderizarPaginaPedidos();
      }
    });
  });

  containerPedidos.querySelectorAll('.btn-resetar-tempo-pedido').forEach((btn) => {
    btn.addEventListener('click', () => {
      recarregarMemoria();
      const idAlvo = Number(btn.dataset.id);
      const ped = pedidosRealizados.find((p) => p.id === idAlvo);
      if (ped) {
        ped.criadoEm = Date.now();
        salvarMemoria();
        renderizarPaginaPedidos();
      }
    });
  });
};

const atualizarInterfaceSessao = () => {
  aplicarConfiguracoesGlobaisDoCeo();
  garantirElementosNavbarFuncionario();
  const navNomeUsuario = document.querySelector('#nav-nome-usuario');
  const navStatusUsuario = document.querySelector('#nav-status-usuario');
  const painelAdmin = document.querySelector('#painel-admin');
  const perfilCargoExibicao = document.querySelector('#perfil-cargo-exibicao');
  const btnAbrirCarrinho = document.querySelector('#btn-abrir-carrinho');
  const btnAbrirUsuario = document.querySelector('#btn-abrir-usuario');
  const telaLoginModal = document.querySelector('#tela-login-modal');
  const telaPerfilModal = document.querySelector('#tela-perfil-modal');
  const perfilNomeExibicao = document.querySelector('#perfil-nome-exibicao');
  const perfilEmailExibicao = document.querySelector('#perfil-email-exibicao');

  const formDesconto = document.querySelector('#form-desconto');
  const btnRemoverDesc = document.querySelector('#btn-remover-descontos');
  const tituloGestao = document.querySelector('#titulo-gestao-precos');

  if (navNomeUsuario) navNomeUsuario.textContent = sessaoAtual.nome;

  const fotoAtiva = sessaoAtual.papel === 'visitante' ? 'usuario.jpg' : (sessaoAtual.foto || 'usuario.jpg');
  document.querySelectorAll('.avatar-mini, .avatar-grande').forEach((img) => {
    aplicarAvatarComFallback(img, fotoAtiva);
  });

  const liAtendimentos = document.querySelector('#li-nav-atendimentos');
  const liPedidos = document.querySelector('#li-nav-pedidos');
  const liCarrinho = btnAbrirCarrinho ? btnAbrirCarrinho.closest('li') : null;

  if (sessaoAtual.papel === 'ceo') {
    if (navStatusUsuario) navStatusUsuario.textContent = '👑 CEO Help-Tec';
    if (painelAdmin) painelAdmin.classList.remove('escondido');
    if (perfilCargoExibicao) perfilCargoExibicao.textContent = 'CEO & Fundador';
    if (liAtendimentos) liAtendimentos.classList.remove('escondido');
    if (liPedidos) liPedidos.classList.remove('escondido');
    if (liCarrinho) liCarrinho.classList.add('escondido');
    if (formDesconto) formDesconto.classList.remove('escondido');
    if (btnRemoverDesc) btnRemoverDesc.classList.remove('escondido');
    if (tituloGestao) tituloGestao.textContent = '👑 Gestão de Preços (Exclusivo CEO)';
  } else if (sessaoAtual.papel === 'admin') {
    if (navStatusUsuario) navStatusUsuario.textContent = 'Modo Funcionário';
    if (painelAdmin) painelAdmin.classList.remove('escondido');
    if (perfilCargoExibicao) perfilCargoExibicao.textContent = 'Funcionário Help-Tec';
    if (liAtendimentos) liAtendimentos.classList.remove('escondido');
    if (liPedidos) liPedidos.classList.add('escondido');
    if (liCarrinho) liCarrinho.classList.add('escondido');
    if (formDesconto) formDesconto.classList.add('escondido');
    if (btnRemoverDesc) btnRemoverDesc.classList.add('escondido');
    if (tituloGestao) tituloGestao.textContent = '📊 Resumo do Estoque';
  } else if (sessaoAtual.papel === 'cliente') {
    if (navStatusUsuario) navStatusUsuario.textContent = 'Modo Cliente';
    if (painelAdmin) painelAdmin.classList.add('escondido');
    if (perfilCargoExibicao) perfilCargoExibicao.textContent = 'Cliente VIP';
    if (liAtendimentos) liAtendimentos.classList.add('escondido');
    if (liPedidos) liPedidos.classList.remove('escondido');
    if (liCarrinho) liCarrinho.classList.remove('escondido');
  } else {
    if (navStatusUsuario) navStatusUsuario.textContent = 'Sem Conta';
    if (painelAdmin) painelAdmin.classList.add('escondido');
    if (perfilCargoExibicao) perfilCargoExibicao.textContent = 'Visitante';
    if (liAtendimentos) liAtendimentos.classList.add('escondido');
    if (liPedidos) liPedidos.classList.remove('escondido');
    if (liCarrinho) liCarrinho.classList.remove('escondido');
  }

  if (btnAbrirUsuario) btnAbrirUsuario.textContent = sessaoAtual.papel === 'visitante' ? 'Login' : 'Meu Perfil';

  if (telaLoginModal && telaPerfilModal) {
    if (sessaoAtual.papel === 'visitante') {
      telaLoginModal.classList.remove('escondido');
      telaPerfilModal.classList.add('escondido');
    } else {
      telaLoginModal.classList.add('escondido');
      telaPerfilModal.classList.remove('escondido');
      if (perfilNomeExibicao) perfilNomeExibicao.textContent = sessaoAtual.nome;
      if (perfilEmailExibicao) perfilEmailExibicao.textContent = sessaoAtual.email;
      preencherCamposModalPerfil();
    }
  }

  atualizarNotificacoesFuncionario();
  filtrarCatalogo();
  renderizarPaginaEquipe();
  renderizarPaginaPedidos();
  atualizarCarrinhoUI();
};

const autenticarOuRegistrarLogin = (nomeInformado, emailInformado, senhaInformada) => {
  recarregarMemoria();
  const emailLimpo = emailInformado.trim().toLowerCase();
  let conta = bancoContas.find((c) => c.email.toLowerCase() === emailLimpo);

  if (conta) {
    if (conta.senha && senhaInformada && conta.senha !== senhaInformada) {
      throw new Error('Senha incorreta para esta conta salva.');
    }
    if (nomeInformado && nomeInformado.length >= 3) conta.nome = nomeInformado;
  } else {
    let papelNovo = 'cliente';
    let fotoNova = 'usuario.jpg';
    if (emailLimpo === 'ceo@helptec.com.br' || emailLimpo === 'davi@helptec.com.br' || nomeInformado.toLowerCase().includes('davi')) {
      papelNovo = 'ceo';
      fotoNova = 'davi.jpg';
    } else if (emailLimpo.includes('@helptec.com.br')) {
      papelNovo = 'admin';
    }
    conta = { nome: nomeInformado || emailLimpo.split('@')[0], email: emailInformado.trim(), senha: senhaInformada, papel: papelNovo, foto: fotoNova };
    bancoContas.push(conta);
  }

  if (conta.email.toLowerCase() === 'ceo@helptec.com.br' || conta.email.toLowerCase() === 'davi@helptec.com.br' || conta.nome.toLowerCase().includes('davi')) {
    conta.papel = 'ceo';
  }

  sessaoAtual = { nome: conta.nome, email: conta.email, papel: conta.papel, foto: conta.foto || 'usuario.jpg' };
  const chaveUsuario = obterChaveCarrinhoAtual();
  carrinhoCompras = chaveUsuario === '' ? [] : lerJsonSeguro(chaveUsuario, []);
  sincronizarPrecosDoCarrinho();
  salvarMemoria();
  atualizarInterfaceSessao();
  return conta;
};

const calcularResumoEstoque = (listaAtual) => {
  const elsQuantidade = document.querySelectorAll('#resumo-quantidade');
  const elsTotal = document.querySelectorAll('#resumo-total');
  const elsMedia = document.querySelectorAll('#resumo-media');
  const elsStatus = document.querySelectorAll('#status-estoque');

  const quantidade = listaAtual.length;
  const totalFixo = listaAtual.reduce((soma, item) => soma + Number(item.valorOriginal || 0), 0);
  const totalAtual = listaAtual.reduce((soma, item) => soma + Number(item.valor || 0), 0);

  let media = 0;
  try {
    const listaValores = listaAtual.map((item) => Number(item.valor || 0));
    media = calcularMediaValores(listaValores);
  } catch (erro) {
    console.error('Aviso no cálculo de média do estoque:', erro.message);
    media = 0;
  }

  elsQuantidade.forEach((el) => { el.textContent = quantidade; });

  elsTotal.forEach((el) => {
    if (totalAtual < totalFixo) {
      el.innerHTML = `<span style="text-decoration:line-through; font-size:13px; color:var(--cor-texto-suave); margin-right:6px;">${formatarMoeda(totalFixo)}</span>${formatarMoeda(totalAtual)}`;
    } else {
      el.textContent = formatarMoeda(totalAtual);
    }
  });

  elsMedia.forEach((el) => { el.textContent = formatarMoeda(media); });

  elsStatus.forEach((el) => {
    if (totalAtual < totalFixo) {
      el.textContent = `Desconto Ativo! Valor Fixo Original: ${formatarMoeda(totalFixo)}`;
      el.classList.add('alto-valor');
    } else if (totalAtual >= 10000) {
      el.textContent = `Estoque Fixo (${formatarMoeda(totalFixo)}): Seguro Corporativo Ativo`;
      el.classList.add('alto-valor');
    } else {
      el.textContent = 'Estoque Normal: Operação Padrão Help-Tec';
      el.classList.remove('alto-valor');
    }
  });
};

const renderizarItens = (listaParaExibir) => {
  const listaCards = document.querySelector('#lista-cards');
  if (!listaCards) return;
  listaCards.innerHTML = '';

  listaParaExibir.forEach((item) => {
    const card = document.createElement('article');
    card.classList.add('card', 'card-produto');

    const temDesconto = Number(item.valor) < Number(item.valorOriginal);
    const rotulo = temDesconto ? '🔥 Em Oferta' : (item.valor >= 2000 ? 'Alta Performance' : 'Linha Essencial');
    const imgFallback = criarImagemSvgProduto('💻', item.nome.slice(0, 18), '#0f172a', '#064e3b');
    const srcImagem = item.imagem || imgFallback;

    let blocoPreco = `<p class="preco-card">${formatarMoeda(item.valor)}</p>`;
    if (temDesconto) {
      blocoPreco = `
        <p style="font-size: 13px; color: var(--cor-texto-suave); text-decoration: line-through; margin-top: 6px;">Fixo: ${formatarMoeda(item.valorOriginal)}</p>
        <p class="preco-card" style="margin-top: 2px; color: var(--cor-neon);">${formatarMoeda(item.valor)}</p>
      `;
    }

    let botaoAcao = `<button type="button" class="btn-primario btn-add-carrinho" data-id="${item.id}">Adicionar ao Carrinho</button>`;
    if (ehFuncionarioOuCeo()) {
      botaoAcao = `<button type="button" class="btn-remover btn-del-produto" data-id="${item.id}">Remover do Sistema</button>`;
    }

    card.innerHTML = `
      <div>
        <div class="card-topo">
          <span class="tag-destaque">${item.categoria}</span>
          <span class="selo-condicional">${rotulo}</span>
        </div>
        <div class="img-produto-container">
          <img src="${srcImagem}" alt="${item.nome}" class="img-produto-card">
        </div>
        <h3>${item.nome}</h3>
        ${blocoPreco}
      </div>
      ${botaoAcao}
    `;

    const imgEl = card.querySelector('.img-produto-card');
    imgEl.onerror = () => {
      imgEl.src = imgFallback;
    };

    card.addEventListener('mouseenter', () => card.classList.add('destaque-hover'));
    card.addEventListener('mouseleave', () => card.classList.remove('destaque-hover'));

    listaCards.appendChild(card);
  });

  calcularResumoEstoque(listaParaExibir);
};

const filtrarCatalogo = () => {
  const filtroCategoria = document.querySelector('#filtro-categoria');
  const filtroBusca = document.querySelector('#filtro-busca');
  const listaCards = document.querySelector('#lista-cards');
  if (!listaCards) return;

  const categoriaEscolhida = filtroCategoria ? filtroCategoria.value : 'todas';
  const termoBusca = filtroBusca ? filtroBusca.value.trim().toLowerCase() : '';

  const filtrados = itens.filter((item) => {
    const bateCategoria = categoriaEscolhida === 'todas' || item.categoria === categoriaEscolhida;
    const bateBusca = item.nome.toLowerCase().includes(termoBusca);
    return bateCategoria && bateBusca;
  });

  renderizarItens(filtrados);
};

const atualizarCarrinhoUI = () => {
  const corpoTabelaCarrinho = document.querySelector('#corpo-tabela-carrinho');
  const contadorCarrinhoNav = document.querySelector('#contador-carrinho');
  const totalCarrinhoModal = document.querySelector('#total-carrinho-modal');

  if (sessaoAtual.papel === 'visitante') {
    carrinhoCompras = [];
  }

  if (contadorCarrinhoNav) contadorCarrinhoNav.textContent = carrinhoCompras.length;

  if (!corpoTabelaCarrinho) return;
  corpoTabelaCarrinho.innerHTML = '';

  let somaCarrinho = 0;
  carrinhoCompras.forEach((item, index) => {
    somaCarrinho += Number(item.valor);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.nome}</strong></td>
      <td>${formatarMoeda(item.valor)}</td>
      <td><button type="button" class="btn-remover-carrinho" data-index="${index}">X</button></td>
    `;
    corpoTabelaCarrinho.appendChild(tr);
  });

  if (totalCarrinhoModal) totalCarrinhoModal.textContent = formatarMoeda(somaCarrinho);
  restaurarVisaoPadraoModalCarrinho();
};

const verificarPermissaoMembroEquipe = (chaveMembro) => {
  if (!ehFuncionarioOuCeo()) return false;
  if (sessaoAtual.papel === 'ceo' && chaveMembro === 'davi') return true;
  const nomeLogado = sessaoAtual.nome.toLowerCase();
  const emailLogado = sessaoAtual.email.toLowerCase();
  return nomeLogado.includes(chaveMembro) || emailLogado.startsWith(chaveMembro);
};

const renderizarPaginaEquipe = () => {
  const containerEquipe = document.querySelector('#grade-equipe-dinamica');
  const heroResumoEquipe = document.querySelector('#hero-resumo-equipe');
  const containerEdicaoHero = document.querySelector('#container-edicao-hero-davi');
  const imgDestaqueHero = document.querySelector('.hero-imagem .avatar-destaque');

  if (!containerEquipe) return;
  recarregarMemoria();

  const contaDavi = bancoContas.find((c) => c.papel === 'ceo' || c.email.toLowerCase().includes('davi'));
  const fotoDaviAtual = (sessaoAtual.papel === 'ceo' && sessaoAtual.foto) ? sessaoAtual.foto : (contaDavi && contaDavi.foto ? contaDavi.foto : (dadosEquipe.davi.foto || 'davi.jpg'));

  if (imgDestaqueHero) aplicarAvatarComFallback(imgDestaqueHero, fotoDaviAtual);
  if (heroResumoEquipe && dadosEquipe.davi) heroResumoEquipe.textContent = dadosEquipe.davi.resumoHero;

  if (containerEdicaoHero) {
    if (verificarPermissaoMembroEquipe('davi')) {
      containerEdicaoHero.innerHTML = `
        <button type="button" id="btn-toggle-hero-davi" class="btn-carrinho" style="margin-top: 10px; font-size: 13px;">✏️ Editar Destaque do Davi</button>
        <form id="form-hero-davi" class="form-edicao-equipe escondido">
          <label for="input-hero-resumo">Texto de Destaque da Equipe</label>
          <input type="text" id="input-hero-resumo" value="${dadosEquipe.davi.resumoHero}">
          <button type="submit" class="btn-primario" style="padding: 8px;">Salvar Destaque</button>
        </form>
      `;
      const btnToggleHero = containerEdicaoHero.querySelector('#btn-toggle-hero-davi');
      const formHero = containerEdicaoHero.querySelector('#form-hero-davi');
      btnToggleHero.addEventListener('click', () => formHero.classList.toggle('escondido'));
      formHero.addEventListener('submit', (e) => {
        e.preventDefault();
        const novoTexto = containerEdicaoHero.querySelector('#input-hero-resumo').value.trim();
        if (novoTexto.length >= 5) {
          dadosEquipe.davi.resumoHero = novoTexto;
          salvarMemoria();
          renderizarPaginaEquipe();
        }
      });
    } else {
      containerEdicaoHero.innerHTML = '';
    }
  }

  containerEquipe.innerHTML = '';

  Object.keys(dadosEquipe).forEach((chave) => {
    const membro = dadosEquipe[chave];
    const podeEditar = verificarPermissaoMembroEquipe(chave);
    const card = document.createElement('article');
    card.className = 'card';

    let areaControle = '';
    if (podeEditar) {
      areaControle = `
        <button type="button" class="btn-entrar btn-abrir-edicao-membro" data-chave="${chave}" style="margin-top: 14px; width: 100%;">✏️ Editar Minha Caixa (${membro.nome})</button>
        <form class="form-edicao-equipe escondido" id="form-equipe-${chave}" data-chave="${chave}">
          <div class="campo-grupo">
            <label for="eq-cargo-${chave}">Cargo</label>
            <input type="text" id="eq-cargo-${chave}" value="${membro.cargo}">
          </div>
          <div class="campo-grupo">
            <label for="eq-idade-${chave}">Idade</label>
            <input type="text" id="eq-idade-${chave}" value="${membro.idade}">
          </div>
          <div class="campo-grupo">
            <label for="eq-hab-${chave}">Habilidade</label>
            <input type="text" id="eq-hab-${chave}" value="${membro.habilidade}">
          </div>
          <div class="campo-grupo">
            <label for="eq-frase-${chave}">Minha Frase</label>
            <input type="text" id="eq-frase-${chave}" value='${membro.frase}'>
          </div>
          <div class="campo-grupo">
            <label for="eq-recado-${chave}">Recado</label>
            <input type="text" id="eq-recado-${chave}" value="${membro.recado}">
          </div>
          <button type="submit" class="btn-primario">Salvar Alterações</button>
        </form>
      `;
    } else if (ehFuncionarioOuCeo()) {
      areaControle = `<p class="aviso-bloqueio-equipe">🔒 Somente ${membro.nome} pode editar esta caixa.</p>`;
    }

    card.innerHTML = `
      <div class="perfil-topo">
        <img class="avatar-perfil" src="${fotoDaviAtual}" alt="Foto de ${membro.nome}">
        <div class="perfil-identificacao">
          <h2>${membro.nome}</h2>
          <p class="subtitulo-perfil">${membro.cargo}</p>
        </div>
      </div>
      <p><strong>Idade:</strong> ${membro.idade}</p>
      <p><strong>Habilidade:</strong> ${membro.habilidade}</p>
      <p><strong>Minha frase:</strong> ${membro.frase}</p>
      <p><strong>Um recado:</strong> ${membro.recado}</p>
      ${areaControle}
    `;

    const imgCard = card.querySelector('.avatar-perfil');
    aplicarAvatarComFallback(imgCard, fotoDaviAtual);
    containerEquipe.appendChild(card);
  });

  containerEquipe.querySelectorAll('.btn-abrir-edicao-membro').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ch = btn.dataset.chave;
      const formAlvo = document.querySelector(`#form-equipe-${ch}`);
      if (formAlvo) formAlvo.classList.toggle('escondido');
    });
  });

  containerEquipe.querySelectorAll('.form-edicao-equipe').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ch = form.dataset.chave;
      if (!verificarPermissaoMembroEquipe(ch)) return;
      dadosEquipe[ch].cargo = document.querySelector(`#eq-cargo-${ch}`).value.trim();
      dadosEquipe[ch].idade = document.querySelector(`#eq-idade-${ch}`).value.trim();
      dadosEquipe[ch].habilidade = document.querySelector(`#eq-hab-${ch}`).value.trim();
      dadosEquipe[ch].frase = document.querySelector(`#eq-frase-${ch}`).value.trim();
      dadosEquipe[ch].recado = document.querySelector(`#eq-recado-${ch}`).value.trim();
      salvarMemoria();
      renderizarPaginaEquipe();
    });
  });
};

const formEdicaoPerfil = document.querySelector('#form-edicao-perfil');
if (formEdicaoPerfil) {
  formEdicaoPerfil.addEventListener('submit', (e) => {
    e.preventDefault();
    const aviso = formEdicaoPerfil.querySelector('#aviso-perfil-salvo');
    try {
      recarregarMemoria();
      const novoNome = formEdicaoPerfil.querySelector('#edit-perfil-nome').value.trim();
      const novoEmail = formEdicaoPerfil.querySelector('#edit-perfil-email').value.trim();
      const novaSenha = formEdicaoPerfil.querySelector('#edit-perfil-senha').value;
      const novaFoto = formEdicaoPerfil.querySelector('#edit-perfil-foto-url').value.trim() || sessaoAtual.foto;

      if (novoNome.length < 3 || !novoEmail.includes('@')) {
        throw new Error('Preencha um nome com ao menos 3 letras e um e-mail válido.');
      }

      const emailAntigo = sessaoAtual.email;
      const contaIdx = bancoContas.findIndex((c) => c.email.toLowerCase() === emailAntigo.toLowerCase());

      sessaoAtual.nome = novoNome;
      sessaoAtual.email = novoEmail;
      sessaoAtual.foto = novaFoto;

      if (novoEmail.toLowerCase() === 'ceo@helptec.com.br' || novoEmail.toLowerCase() === 'davi@helptec.com.br' || novoNome.toLowerCase().includes('davi')) {
        sessaoAtual.papel = 'ceo';
      } else if (novoEmail.toLowerCase().includes('@helptec.com.br')) {
        sessaoAtual.papel = 'admin';
      } else {
        sessaoAtual.papel = 'cliente';
      }

      if (contaIdx !== -1) {
        bancoContas[contaIdx].nome = novoNome;
        bancoContas[contaIdx].email = novoEmail;
        bancoContas[contaIdx].foto = novaFoto;
        bancoContas[contaIdx].papel = sessaoAtual.papel;
        if (novaSenha.length >= 6) bancoContas[contaIdx].senha = novaSenha;
      } else {
        bancoContas.push({ nome: novoNome, email: novoEmail, senha: novaSenha.length >= 6 ? novaSenha : '123456', papel: sessaoAtual.papel, foto: novaFoto });
      }

      if (sessaoAtual.papel === 'ceo' && dadosEquipe.davi) {
        dadosEquipe.davi.nome = novoNome;
        dadosEquipe.davi.foto = novaFoto;
      }

      salvarMemoria();
      atualizarInterfaceSessao();
      if (aviso) { aviso.style.color = 'var(--cor-neon)'; aviso.textContent = 'Perfil atualizado com sucesso!'; }
    } catch (erro) {
      console.error('Erro ao atualizar perfil:', erro.message);
      if (aviso) { aviso.style.color = '#f87171'; aviso.textContent = erro.message; }
    }
  });
}

const formProduto = document.querySelector('#form-produto');
if (formProduto) {
  formProduto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const avisoSucesso = document.querySelector('#aviso-sucesso');
    if (avisoSucesso) avisoSucesso.textContent = '';

    try {
      const inputNome = buscarElemento('#nome-produto');
      const inputCodigo = document.querySelector('#codigo-produto');
      const selectCategoria = buscarElemento('#categoria-produto');
      const inputValor = buscarElemento('#valor-produto');
      const inputImagem = document.querySelector('#imagem-produto');

      if (inputNome.value.trim().length < 3) {
        mostrarErro(inputNome, 'O nome precisa ter pelo menos 3 caracteres.');
        throw new Error('Nome do produto inválido');
      }
      mostrarErro(inputNome, '');

      if (inputCodigo && inputCodigo.value.trim().length < 4) {
        mostrarErro(inputCodigo, 'Informe um código com no mínimo 4 caracteres.');
        throw new Error('Código de série inválido');
      }
      if (inputCodigo) mostrarErro(inputCodigo, '');

      if (selectCategoria.value === '') {
        mostrarErro(selectCategoria, 'Selecione uma categoria.');
        throw new Error('Categoria não selecionada');
      }
      mostrarErro(selectCategoria, '');

      const valorNumero = Number(inputValor.value);
      if (inputValor.value.trim() === '' || isNaN(valorNumero) || valorNumero <= 0) {
        mostrarErro(inputValor, 'Informe um valor numérico maior que zero.');
        throw new Error('Valor unitário inválido');
      }
      mostrarErro(inputValor, '');

      const codigoStr = inputCodigo ? ` (${inputCodigo.value.trim().toUpperCase()})` : '';
      const nomeCompleto = `${inputNome.value.trim()}${codigoStr}`;
      const fotoInformada = inputImagem && inputImagem.value.trim() !== ''
        ? inputImagem.value.trim()
        : criarImagemSvgProduto('⚡', inputNome.value.trim().slice(0, 18), '#0f172a', '#064e3b');

      itens.push({
        id: Date.now(),
        nome: nomeCompleto,
        categoria: selectCategoria.value,
        valorOriginal: valorNumero,
        valor: valorNumero,
        imagem: fotoInformada
      });
      salvarMemoria();
      filtrarCatalogo();
      formProduto.reset();
      if (avisoSucesso) avisoSucesso.textContent = 'Produto com foto adicionado ao catálogo ao vivo!';
    } catch (erro) {
      console.error('Falha ao cadastrar produto:', erro.message);
    }
  });
}

const formDesconto = document.querySelector('#form-desconto');
const btnRemoverDesc = document.querySelector('#btn-remover-descontos');
if (formDesconto) {
  formDesconto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputDescPorcentagem = document.querySelector('#desc-porcentagem');
    const selectDescCategoria = document.querySelector('#desc-categoria');
    const avisoDesconto = document.querySelector('#aviso-desconto');

    try {
      if (sessaoAtual.papel !== 'ceo') {
        throw new Error('Apenas o CEO pode aplicar descontos.');
      }

      const percentual = Number(inputDescPorcentagem.value);
      const catAlvo = selectDescCategoria ? selectDescCategoria.value : 'todas';

      itens = itens.map((item) => {
        if (catAlvo === 'todas' || item.categoria === catAlvo) {
          const novoValor = aplicarDescontoSeguro(item.valorOriginal, percentual);
          return { ...item, valor: novoValor };
        }
        return item;
      });

      sincronizarPrecosDoCarrinho();
      mostrarErro(inputDescPorcentagem, '');
      salvarMemoria();
      filtrarCatalogo();
      atualizarCarrinhoUI();
      formDesconto.reset();
      if (avisoDesconto) avisoDesconto.textContent = `Desconto de ${percentual}% aplicado sobre o valor fixo!`;
    } catch (erro) {
      console.error('Erro ao aplicar desconto:', erro.message);
      mostrarErro(inputDescPorcentagem, erro.message);
    }
  });
}

if (btnRemoverDesc) {
  btnRemoverDesc.addEventListener('click', () => {
    try {
      if (sessaoAtual.papel !== 'ceo') {
        throw new Error('Permissão negada: exclusivo para CEO.');
      }
      itens = itens.map((item) => ({ ...item, valor: item.valorOriginal }));
      sincronizarPrecosDoCarrinho();
      salvarMemoria();
      filtrarCatalogo();
      atualizarCarrinhoUI();
      const avisoDesconto = document.querySelector('#aviso-desconto');
      if (avisoDesconto) avisoDesconto.textContent = 'Todos os descontos foram removidos! Valores fixos restaurados.';
    } catch (erro) {
      console.error('Falha ao remover descontos:', erro.message);
    }
  });
}

const linkDicaFuncionario = document.querySelector('#link-dica-funcionario');
if (linkDicaFuncionario) {
  linkDicaFuncionario.addEventListener('click', (evento) => {
    evento.preventDefault();
    const inputModalEmail = document.querySelector('#modal-login-email');
    const inputModalNome = document.querySelector('#modal-login-nome');
    const inputModalSenha = document.querySelector('#modal-login-senha');
    if (inputModalEmail) inputModalEmail.value = 'ceo@helptec.com.br';
    if (inputModalNome && !inputModalNome.value) inputModalNome.value = 'Davi Locatel';
    if (inputModalSenha) inputModalSenha.focus();
  });
}

const formLoginModal = document.querySelector('#form-login-modal');
if (formLoginModal) {
  formLoginModal.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputModalNome = document.querySelector('#modal-login-nome');
    const inputModalEmail = document.querySelector('#modal-login-email');
    const inputModalSenha = document.querySelector('#modal-login-senha');

    try {
      if (inputModalNome && inputModalNome.value.trim().length < 3) {
        mostrarErro(inputModalNome, 'Digite seu nome com pelo menos 3 letras.');
        throw new Error('Nome curto no login modal');
      }
      if (inputModalNome) mostrarErro(inputModalNome, '');

      if (!inputModalEmail.value.includes('@') || !inputModalEmail.value.includes('.')) {
        mostrarErro(inputModalEmail, 'Informe um e-mail válido.');
        throw new Error('E-mail inválido no login modal');
      }
      mostrarErro(inputModalEmail, '');

      if (inputModalSenha.value.length < 6) {
        mostrarErro(inputModalSenha, 'Mínimo de 6 caracteres.');
        throw new Error('Senha curta no login modal');
      }
      mostrarErro(inputModalSenha, '');

      autenticarOuRegistrarLogin(inputModalNome ? inputModalNome.value.trim() : '', inputModalEmail.value.trim(), inputModalSenha.value);
      formLoginModal.reset();
    } catch (erro) {
      console.error('Erro de autenticação no modal:', erro.message);
      if (erro.message.includes('Senha incorreta')) {
        mostrarErro(inputModalSenha, erro.message);
      }
    }
  });
}

const formPaginaLogin = document.querySelector('#form-pagina-login');
if (formPaginaLogin) {
  formPaginaLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputLoginPaginaNome = document.querySelector('#login-pagina-nome');
    const inputLoginPaginaEmail = document.querySelector('#login-pagina-email');
    const inputLoginPaginaSenha = document.querySelector('#login-pagina-senha');
    const avisoSucessoLogin = document.querySelector('#aviso-sucesso-login');
    if (avisoSucessoLogin) avisoSucessoLogin.textContent = '';

    try {
      if (inputLoginPaginaNome && inputLoginPaginaNome.value.trim().length < 3) {
        mostrarErro(inputLoginPaginaNome, 'Mínimo 3 caracteres.');
        throw new Error('Nome inválido');
      }
      if (inputLoginPaginaNome) mostrarErro(inputLoginPaginaNome, '');

      if (!inputLoginPaginaEmail.value.includes('@')) {
        mostrarErro(inputLoginPaginaEmail, 'Informe um e-mail válido.');
        throw new Error('E-mail inválido');
      }
      mostrarErro(inputLoginPaginaEmail, '');

      if (inputLoginPaginaSenha.value.length < 6) {
        mostrarErro(inputLoginPaginaSenha, 'A senha precisa ter 6 caracteres ou mais.');
        throw new Error('Senha curta');
      }
      mostrarErro(inputLoginPaginaSenha, '');

      autenticarOuRegistrarLogin(inputLoginPaginaNome ? inputLoginPaginaNome.value.trim() : '', inputLoginPaginaEmail.value.trim(), inputLoginPaginaSenha.value);
      if (avisoSucessoLogin) avisoSucessoLogin.textContent = 'Login realizado com sucesso! Pode navegar no site.';
      formPaginaLogin.reset();
    } catch (erro) {
      console.error('Falha no login da página:', erro.message);
      if (erro.message.includes('Senha incorreta')) {
        mostrarErro(inputLoginPaginaSenha, erro.message);
      }
    }
  });
}

const formPaginaLoginFunc = document.querySelector('#form-pagina-login-func');
if (formPaginaLoginFunc) {
  formPaginaLoginFunc.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputLoginFuncNome = document.querySelector('#login-func-nome');
    const inputLoginFuncEmail = document.querySelector('#login-func-email');
    const inputLoginFuncSenha = document.querySelector('#login-func-senha');
    const avisoSucessoLoginFunc = document.querySelector('#aviso-sucesso-login-func');
    if (avisoSucessoLoginFunc) avisoSucessoLoginFunc.textContent = '';

    try {
      if (inputLoginFuncNome.value.trim().length < 3) {
        mostrarErro(inputLoginFuncNome, 'Mínimo 3 caracteres.');
        throw new Error('Nome de colaborador inválido');
      }
      mostrarErro(inputLoginFuncNome, '');

      if (!inputLoginFuncEmail.value.includes('@helptec.com.br')) {
        mostrarErro(inputLoginFuncEmail, 'Apenas e-mails @helptec.com.br são permitidos.');
        throw new Error('Domínio corporativo obrigatório');
      }
      mostrarErro(inputLoginFuncEmail, '');

      if (inputLoginFuncSenha.value.length < 6) {
        mostrarErro(inputLoginFuncSenha, 'Senha de sistema inválida.');
        throw new Error('Senha corporativa curta');
      }
      mostrarErro(inputLoginFuncSenha, '');

      autenticarOuRegistrarLogin(inputLoginFuncNome.value.trim(), inputLoginFuncEmail.value.trim(), inputLoginFuncSenha.value);
      if (avisoSucessoLoginFunc) avisoSucessoLoginFunc.textContent = 'Autenticação concluída! O sino e a aba Atendimentos foram liberados.';
      formPaginaLoginFunc.reset();
    } catch (erro) {
      console.error('Erro no login corporativo:', erro.message);
      if (erro.message.includes('Senha incorreta')) {
        mostrarErro(inputLoginFuncSenha, erro.message);
      }
    }
  });
}

const inputCadCpf = document.querySelector('#cad-cpf');
if (inputCadCpf) {
  inputCadCpf.addEventListener('input', (evento) => {
    evento.target.value = formatarCpfPuro(evento.target.value);
  });
}

const inputCadSenha = document.querySelector('#cad-senha');
const barraForcaCad = document.querySelector('#barra-forca-cad');
const textoForcaCad = document.querySelector('#texto-forca-cad');
if (inputCadSenha && barraForcaCad && textoForcaCad) {
  inputCadSenha.addEventListener('input', (evento) => {
    const pts = avaliarForcaSenhaPura(evento.target.value);

    if (pts === 0) {
      barraForcaCad.style.width = '0%';
      textoForcaCad.textContent = 'Força da senha: Muito fraca';
    } else if (pts === 1) {
      barraForcaCad.style.width = '33%';
      barraForcaCad.style.backgroundColor = '#ef4444';
      textoForcaCad.textContent = 'Força da senha: Fraca';
    } else if (pts === 2) {
      barraForcaCad.style.width = '66%';
      barraForcaCad.style.backgroundColor = '#f59e0b';
      textoForcaCad.textContent = 'Força da senha: Média';
    } else {
      barraForcaCad.style.width = '100%';
      barraForcaCad.style.backgroundColor = '#10b981';
      textoForcaCad.textContent = 'Força da senha: Forte';
    }
  });
}

const formPaginaCadastro = document.querySelector('#form-pagina-cadastro');
if (formPaginaCadastro) {
  formPaginaCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputCadNome = document.querySelector('#cad-nome');
    const inputCadEmail = document.querySelector('#cad-email');
    const inputCadNascimento = document.querySelector('#cad-nascimento');
    const avisoSucessoCadastro = document.querySelector('#aviso-sucesso-cadastro');
    if (avisoSucessoCadastro) avisoSucessoCadastro.textContent = '';

    try {
      if (inputCadNome && inputCadNome.value.trim().length < 3) {
        mostrarErro(inputCadNome, 'O nome precisa ter pelo menos 3 letras.');
        throw new Error('Nome inválido no cadastro');
      }
      if (inputCadNome) mostrarErro(inputCadNome, '');

      if (!inputCadEmail.value.includes('@') || !inputCadEmail.value.includes('.')) {
        mostrarErro(inputCadEmail, 'Informe um e-mail válido com @ e ponto.');
        throw new Error('E-mail inválido no cadastro');
      }
      mostrarErro(inputCadEmail, '');

      if (extrairApenasNumeros(inputCadCpf.value).length < 11) {
        mostrarErro(inputCadCpf, 'O CPF precisa ter 11 números.');
        throw new Error('CPF incompleto');
      }
      mostrarErro(inputCadCpf, '');

      if (inputCadNascimento.value === '') {
        mostrarErro(inputCadNascimento, 'Informe sua data de nascimento.');
        throw new Error('Data de nascimento vazia');
      }
      mostrarErro(inputCadNascimento, '');

      if (inputCadSenha.value.length < 8) {
        mostrarErro(inputCadSenha, 'A senha precisa ter no mínimo 8 caracteres.');
        throw new Error('Senha fraca no cadastro');
      }
      mostrarErro(inputCadSenha, '');

      const nomeCadastrado = inputCadNome ? inputCadNome.value.trim() : inputCadEmail.value.split('@')[0];
      const emailCad = inputCadEmail.value.trim();
      const jaExiste = bancoContas.find((c) => c.email.toLowerCase() === emailCad.toLowerCase());

      if (jaExiste) {
        mostrarErro(inputCadEmail, 'Este e-mail já está cadastrado no sistema.');
        throw new Error('E-mail duplicado');
      }

      let papelCad = 'cliente';
      let fotoCad = 'usuario.jpg';
      if (emailCad.toLowerCase() === 'ceo@helptec.com.br' || emailCad.toLowerCase() === 'davi@helptec.com.br') {
        papelCad = 'ceo';
        fotoCad = 'davi.jpg';
      } else if (emailCad.toLowerCase().includes('@helptec.com.br')) {
        papelCad = 'admin';
      }

      bancoContas.push({
        nome: nomeCadastrado,
        email: emailCad,
        cpf: inputCadCpf.value.trim(),
        nascimento: inputCadNascimento.value,
        senha: inputCadSenha.value,
        papel: papelCad,
        foto: fotoCad
      });

      salvarMemoria();
      autenticarOuRegistrarLogin(nomeCadastrado, emailCad, inputCadSenha.value);
      if (avisoSucessoCadastro) avisoSucessoCadastro.textContent = `Conta salva no sistema e sessão iniciada para ${nomeCadastrado}!`;
      formPaginaCadastro.reset();
    } catch (erro) {
      console.error('Erro ao cadastrar conta:', erro.message);
    } finally {
      if (barraForcaCad && (!inputCadSenha || inputCadSenha.value === '')) {
        barraForcaCad.style.width = '0%';
      }
      if (textoForcaCad && (!inputCadSenha || inputCadSenha.value === '')) {
        textoForcaCad.textContent = 'Força da senha: Muito fraca';
      }
    }
  });
}

document.addEventListener('click', (evento) => {
  if (evento.target.matches('#btn-sair-conta')) {
    sessaoAtual = { nome: 'Visitante', papel: 'visitante', email: '', foto: 'usuario.jpg' };
    carrinhoCompras = [];
    salvarMemoria();
    atualizarInterfaceSessao();
    const telaLoginModal = document.querySelector('#tela-login-modal');
    const telaPerfilModal = document.querySelector('#tela-perfil-modal');
    const btnAbrirUsuario = document.querySelector('#btn-abrir-usuario');
    if (btnAbrirUsuario) btnAbrirUsuario.textContent = 'Login';
    if (telaPerfilModal && telaLoginModal) {
      telaPerfilModal.classList.add('escondido');
      telaLoginModal.classList.remove('escondido');
    }
  }
});

const listaCards = document.querySelector('#lista-cards');
if (listaCards) {
  listaCards.addEventListener('click', (evento) => {
    if (evento.target.matches('.btn-del-produto')) {
      const idStr = evento.target.dataset.id;
      itens = itens.filter((item) => item.id !== Number(idStr));
      sincronizarPrecosDoCarrinho();
      salvarMemoria();
      filtrarCatalogo();
      atualizarCarrinhoUI();
    }

    if (evento.target.matches('.btn-add-carrinho')) {
      try {
        if (sessaoAtual.papel === 'visitante') {
          throw new Error('Faça login ou crie uma conta para adicionar produtos ao carrinho.');
        }

        const idStr = evento.target.dataset.id;
        const produtoAchado = itens.find((item) => item.id === Number(idStr));
        if (produtoAchado) {
          const reciboAntigo = document.querySelector('#danfe-container-dinamico');
          if (reciboAntigo) reciboAntigo.remove();
          carrinhoCompras.push(produtoAchado);
          salvarMemoria();
          atualizarCarrinhoUI();
          evento.target.textContent = '✓ Adicionado ao Carrinho';
        }
      } catch (erro) {
        console.error('Bloqueio de carrinho para visitante:', erro.message);
        evento.target.textContent = '🔒 Faça Login para Comprar';
        const modalUsuario = document.querySelector('#modal-usuario');
        const inputModalNome = document.querySelector('#modal-login-nome');
        if (modalUsuario) {
          modalUsuario.classList.remove('escondido');
          modalUsuario.classList.add('aberto');
        }
        if (inputModalNome) {
          mostrarErro(inputModalNome, erro.message);
        }
      }
    }
  });
}

const corpoTabelaCarrinho = document.querySelector('#corpo-tabela-carrinho');
if (corpoTabelaCarrinho) {
  corpoTabelaCarrinho.addEventListener('click', (evento) => {
    if (evento.target.matches('.btn-remover-carrinho')) {
      const indexStr = evento.target.dataset.index;
      carrinhoCompras.splice(Number(indexStr), 1);
      salvarMemoria();
      atualizarCarrinhoUI();
    }
  });
}

const btnEsvaziarCarrinho = document.querySelector('#btn-esvaziar-carrinho');
if (btnEsvaziarCarrinho) {
  btnEsvaziarCarrinho.addEventListener('click', () => {
    carrinhoCompras = [];
    salvarMemoria();
    const reciboAntigo = document.querySelector('#danfe-container-dinamico');
    if (reciboAntigo) reciboAntigo.remove();
    atualizarCarrinhoUI();
  });
}

const btnFinalizarCompra = document.querySelector('#btn-finalizar-compra');
if (btnFinalizarCompra) {
  btnFinalizarCompra.addEventListener('click', () => {
    const modalCarrinho = document.querySelector('#modal-carrinho');
    const modalConteudo = modalCarrinho.querySelector('.modal-conteudo');
    const reciboAntigo = document.querySelector('#danfe-container-dinamico');
    if (reciboAntigo) reciboAntigo.remove();

    try {
      if (sessaoAtual.papel === 'visitante') {
        throw new Error('Faça login na sua conta antes de realizar compras.');
      }

      if (carrinhoCompras.length === 0) {
        throw new Error('O seu carrinho está vazio! Adicione produtos no Catálogo primeiro.');
      }

      const selectMetodo = document.querySelector('#checkout-metodo-pagamento');
      const metodoEscolhido = selectMetodo ? selectMetodo.value : 'PIX Instantâneo';
      const nomeRecebedor = 'Help-Tec Pagamentos LTDA';
      const nomeComprador = sessaoAtual.nome;
      const emailComprador = sessaoAtual.email;

      const totalCompra = carrinhoCompras.reduce((acc, item) => acc + Number(item.valor), 0);
      const protocoloPedido = `HT-${Math.floor(100000 + Math.random() * 900000)}`;
      const horaCompra = obterHoraAtual();

      const novoPedido = {
        id: Date.now(),
        protocolo: protocoloPedido,
        compradorNome: nomeComprador,
        compradorEmail: emailComprador,
        recebedorNome: nomeRecebedor,
        metodoPagamento: metodoEscolhido,
        itens: carrinhoCompras.map((i) => ({ nome: i.nome, valor: Number(i.valor) })),
        total: totalCompra,
        criadoEm: Date.now(),
        horaFormatada: horaCompra
      };

      pedidosRealizados.push(novoPedido);

      const itensHtml = novoPedido.itens.map((item) => `
        <li class="danfe-item">
          <span>${item.nome}</span>
          <strong>${formatarMoeda(item.valor)}</strong>
        </li>
      `).join('');

      const tabelaContainer = modalCarrinho.querySelector('.tabela-container');
      const blocoCheckout = modalCarrinho.querySelector('#bloco-checkout-pagamento');
      const totalBox = modalCarrinho.querySelector('.carrinho-total');
      if (tabelaContainer) tabelaContainer.classList.add('escondido');
      if (blocoCheckout) blocoCheckout.classList.add('escondido');
      if (totalBox) totalBox.classList.add('escondido');

      const danfeDiv = document.createElement('div');
      danfeDiv.id = 'danfe-container-dinamico';
      danfeDiv.className = 'danfe-recibo';
      danfeDiv.innerHTML = `
        <div class="danfe-topo">
          <div>
            <strong style="color: var(--cor-neon); font-size: 15px;">🧾 Recibo de Compra & Pagamento Confirmado</strong>
            <small style="display:block; color: var(--cor-texto-suave);">Pedido #${protocoloPedido} · Confirmado às ${horaCompra}</small>
          </div>
          <span class="tag-destaque">1. Pedido Solicitado</span>
        </div>
        <div style="font-size: 13px; display: flex; flex-direction: column; gap: 4px;">
          <p><strong>👤 Quem Comprou:</strong> ${nomeComprador} (${emailComprador})</p>
          <p><strong>🏢 Quem Recebeu:</strong> ${nomeRecebedor}</p>
          <p><strong>💳 Método de Pagamento:</strong> ${metodoEscolhido}</p>
        </div>
        <strong style="font-size: 12px; color: var(--cor-texto-suave);">Valor de Cada Produto (${novoPedido.itens.length} itens):</strong>
        <ul class="danfe-lista">${itensHtml}</ul>
        <div style="display:flex; flex-wrap: wrap; justify-content:space-between; align-items:center; gap: 8px; padding-top:8px; border-top: 1px solid var(--cor-borda);">
          <strong style="color: var(--cor-neon); font-size: 16px;">Valor Total: ${formatarMoeda(totalCompra)}</strong>
          <a href="pedidos.html" class="btn-primario" style="padding: 8px 14px; font-size: 12px; width: auto; text-decoration: none;">📦 Rastrear Meu Pedido Ao Vivo</a>
        </div>
      `;

      modalConteudo.appendChild(danfeDiv);
      modalConteudo.scrollTop = 0;

      carrinhoCompras = [];
      salvarMemoria();
      renderizarPaginaPedidos();
    } catch (erro) {
      console.error('Erro ao finalizar compra:', erro.message);
      const avisoVazio = document.createElement('div');
      avisoVazio.id = 'danfe-container-dinamico';
      avisoVazio.className = 'danfe-recibo';
      avisoVazio.innerHTML = `<p style="color: var(--cor-erro); font-weight: bold;">${erro.message}</p>`;
      modalConteudo.appendChild(avisoVazio);
    } finally {
      const contadorCarrinhoNav = document.querySelector('#contador-carrinho');
      const totalCarrinhoModal = document.querySelector('#total-carrinho-modal');
      const corpoTabela = document.querySelector('#corpo-tabela-carrinho');
      if (corpoTabela) corpoTabela.innerHTML = '';
      if (contadorCarrinhoNav) contadorCarrinhoNav.textContent = carrinhoCompras.length;
      if (totalCarrinhoModal) totalCarrinhoModal.textContent = formatarMoeda(0);
    }
  });
}

const modais = [
  { btnAbrir: document.querySelector('#btn-abrir-usuario'), btnFechar: document.querySelector('#btn-fechar-modal'), modal: document.querySelector('#modal-usuario') },
  { btnAbrir: document.querySelector('#btn-abrir-carrinho'), btnFechar: document.querySelector('#btn-fechar-carrinho'), modal: document.querySelector('#modal-carrinho') }
];

modais.forEach(({ btnAbrir, btnFechar, modal }) => {
  if (btnAbrir && modal && btnFechar) {
    btnAbrir.addEventListener('click', () => {
      preencherCamposModalPerfil();
      restaurarVisaoPadraoModalCarrinho();
      modal.classList.remove('escondido');
      modal.classList.add('aberto');
    });
    btnFechar.addEventListener('click', () => {
      modal.classList.remove('aberto');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('aberto');
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mUsuario = document.querySelector('#modal-usuario');
    const mCarrinho = document.querySelector('#modal-carrinho');
    if (mUsuario) mUsuario.classList.remove('aberto');
    if (mCarrinho) mCarrinho.classList.remove('aberto');
  }
});

const filtroCategoriaDOM = document.querySelector('#filtro-categoria');
const filtroBuscaDOM = document.querySelector('#filtro-busca');
if (filtroCategoriaDOM && filtroBuscaDOM) {
  filtroCategoriaDOM.addEventListener('change', filtrarCatalogo);
  filtroBuscaDOM.addEventListener('input', filtrarCatalogo);
}

const btnMenuDOM = document.querySelector('#btn-menu');
const menuColapsavelDOM = document.querySelector('#menu-colapsavel');
if (btnMenuDOM && menuColapsavelDOM) {
  btnMenuDOM.addEventListener('click', () => menuColapsavelDOM.classList.toggle('aberto'));
}

window.addEventListener('storage', () => {
  aplicarConfiguracoesGlobaisDoCeo();
  atualizarNotificacoesFuncionario();
  atualizarCarrinhoUI();
  renderizarPaginaPedidos();
});

window.addEventListener('focus', () => {
  aplicarConfiguracoesGlobaisDoCeo();
  atualizarNotificacoesFuncionario();
  atualizarCarrinhoUI();
  renderizarPaginaPedidos();
});

document.addEventListener('mousemove', () => {
  if (estaNaPaginaPedidos()) {
    renderizarPaginaPedidos();
  }
});

atualizarInterfaceSessao();
atualizarCarrinhoUI();
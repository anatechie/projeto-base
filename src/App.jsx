import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Resumo from "./components/Resumo";
import Atendimento from "./components/Atendimento";
import Servicos from "./components/Servicos";
import Profissional from "./components/Profissional";

import Footer from "./components/Footer";

import Configuracao from "./components/Configuracao";
import Autenticacao from "./components/Autenticacao";

function App() {

  // AUTENTICAÇÃO E CONTA

  const [contaCadastrada, setContaCadastrada] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [modoAuth, setModoAuth] = useState("login");
  const [mensagemErro, setMensagemErro] = useState("");

  // Campos do Formulário de Autenticacao
  const [authNome, setAuthNome] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authSenha, setAuthSenha] = useState("");
  const [authProfissao, setAuthProfissao] = useState("");


  //  NAVEGAÇÃO E TEMA

  const [paginaAtual, setPaginaAtual] = useState("home");
  const [notificacoes, setNotificacoes] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [perfilVisivel, setPerfilVisivel] = useState(true);


  //  PERFIL DO PROFISSIONAL

  const [profissional, setProfissional] = useState({
    nome: "Marina Santos",
    profissao: "Psicóloga",
    cidade: "Brasília - DF",
    atendeOnline: true,
    atendePresencial: true,
    frase: "Cuidar de pessoas é transformar histórias."
  });


  // AUTENTICAÇÃO

  function enviar(e) {
    e.preventDefault();
    setMensagemErro("");

    if (modoAuth === "cadastro") {
      const novaConta = {
        nome: authNome.trim() !== "" ? authNome : "Marina Santos",
        email: authEmail.trim(),
        senha: authSenha,
        profissao: authProfissao.trim() !== "" ? authProfissao : "Profissional"
      };

      setContaCadastrada(novaConta);
      setUsuarioLogado(novaConta);

      setProfissional((prev) => ({
        ...prev,
        nome: novaConta.nome,
        profissao: novaConta.profissao
      }));
    } else {
      // caso não exista conta cadastrada
      if (!contaCadastrada) {
        setMensagemErro(
          "Nenhuma conta encontrada! Por favor, faça o cadastro primeiro."
        );
        return;
      }

      if (
        authEmail.trim() !== contaCadastrada.email ||
        authSenha !== contaCadastrada.senha
      ) {
        setMensagemErro("E-mail ou senha incorretos!");
        return;
      }

      setUsuarioLogado(contaCadastrada);
      setProfissional((prev) => ({
        ...prev,
        nome: contaCadastrada.nome,
        profissao: contaCadastrada.profissao
      }));
    }
  }

  function sair() {
    setUsuarioLogado(null);
    setAuthNome("");
    setAuthEmail("");
    setAuthSenha("");
    setAuthProfissao("");
    setMensagemErro("");
    setPaginaAtual("home");
  }

  function mudarModoAutenticacao(novoModo) {
    setModoAuth(novoModo);
    setMensagemErro("");
  }


  // EDIÇÃO DE PERFIL NAS CONFIGURAÇÕES

  function mudarPerfil(e) {
    const { name, value, type, checked } = e.target;
    setProfissional((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }


  const resumo = {
    nome: profissional.nome ? profissional.nome.split(" ")[0] : "Marina",
    atendimentosHoje: 4,
    valorRecebido: 480,
    horariosDisponiveis: 3
  };

  const atendimentoCompleto = {
    cliente: "João Silva",
    servico: "Consulta inicial",
    data: "25/09/2026",
    horario: "14:30",
    modalidade: "Online",
    valor: 120,
    pago: true,
    observacao: "O link será enviado alguns minutos antes do horário."
  };

  const servicos = [
    { nome: "Consulta inicial", descricao: "Primeiro atendimento.", valor: 120 },
    { nome: "Retorno", descricao: "Acompanhamento do processo.", valor: 80 },
    { nome: "Avaliação", descricao: "Avaliação personalizada.", valor: 150 },
    { nome: "Orientação", descricao: "Suporte e dúvidas.", valor: 100 }
  ];

  // TELA DE LOGIN / CADASTRO

  if (!usuarioLogado) {
    return (
      <div className={temaEscuro ? "app escuro" : "app claro"}>
        <Autenticacao
          modo={modoAuth}
          setModo={mudarModoAutenticacao}
          nome={authNome}
          setNome={setAuthNome}
          email={authEmail}
          setEmail={setAuthEmail}
          senha={authSenha}
          setSenha={setAuthSenha}
          profissao={authProfissao}
          setProfissao={setAuthProfissao}
          mensagemErro={mensagemErro}
          onSubmit={enviar}
        />
      </div>
    );
  }

  //  PAINEL PRINCIPAL

  return (
    <div className={temaEscuro ? "app escuro" : "app claro"}>
      <Header
        titulo="AgendaPro"
        setPaginaAtual={setPaginaAtual}
        onSair={sair}
      />

      <main>
        {paginaAtual === "home" ? (
          <>
            <Resumo resumo={resumo} />

            <div className="painel-principal">
              <Atendimento atendimento={atendimentoCompleto} />

              {perfilVisivel && (
                <Profissional profissional={profissional} />
              )}
            </div>

            <Servicos servicos={servicos} />
          </>
        ) : (
          <Configuracao
            notificacoes={notificacoes}
            alterarNotificacoes={() => setNotificacoes(!notificacoes)}
            temaEscuro={temaEscuro}
            alterarTema={() => setTemaEscuro(!temaEscuro)}
            perfilVisivel={perfilVisivel}
            alterarPerfil={() => setPerfilVisivel(!perfilVisivel)}
            profissional={profissional}
            onPerfilChange={mudarPerfil}
            voltar={() => setPaginaAtual("home")}
          />
        )}
      </main>

      <Footer texto="AgendaPro © 2026" />
    </div>
  );
}

export default App;
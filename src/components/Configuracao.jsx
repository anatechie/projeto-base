import CardConfiguracao from "./CardConfiguracao";

function Configuracao({
  notificacoes,
  alterarNotificacoes,
  temaEscuro,
  alterarTema,
  perfilVisivel,
  alterarPerfil,
  profissional,
  onPerfilChange,
  voltar
}) {
  return (
    <section className="pagina-configuracoes">
      <div className="configuracoes-header">
        <button className="btn-voltar" onClick={voltar}>
          ← Voltar ao Início
        </button>
        <h2>Configurações do Painel</h2>
      </div>

      <div className="configuracoes-cards">
        <CardConfiguracao titulo="Notificações">
          <p>
            Status: <strong>{notificacoes ? "Ativadas" : "Desativadas"}</strong>
          </p>
          <button className="btn-config" onClick={alterarNotificacoes}>
            {notificacoes ? "Desativar" : "Ativar"}
          </button>
        </CardConfiguracao>

        <CardConfiguracao titulo="Tema">
          <p>
            Tema atual: <strong>{temaEscuro ? "Escuro" : "Claro"}</strong>
          </p>
          <button className="btn-config" onClick={alterarTema}>
            Alterar Tema
          </button>
        </CardConfiguracao>

        <CardConfiguracao titulo="Visibilidade do Perfil">
          <p>
            Status: <strong>{perfilVisivel ? "Visível" : "Escondido"}</strong>
          </p>
          <button className="btn-config" onClick={alterarPerfil}>
            {perfilVisivel ? "Esconder perfil" : "Mostrar perfil"}
          </button>
        </CardConfiguracao>
      </div>

      {/* APENAS SE perfilVisivel FOR TRUE */}
      {perfilVisivel && (
        <div className="card-edicao-perfil">
          <h3>Editar Dados do Profissional</h3>
          <form onSubmit={(e) => e.preventDefault()} className="form-edicao-perfil">
            <div className="form-group">
              <label>Nome Completo:</label>
              <input
                type="text"
                name="nome"
                value={profissional.nome}
                onChange={onPerfilChange}
              />
            </div>

            <div className="form-group">
              <label>Profissão / Especialidade:</label>
              <input
                type="text"
                name="profissao"
                value={profissional.profissao}
                onChange={onPerfilChange}
              />
            </div>

            <div className="form-group">
              <label>Cidade / Estado:</label>
              <input
                type="text"
                name="cidade"
                value={profissional.cidade}
                onChange={onPerfilChange}
              />
            </div>

            <div className="form-group">
              <label>Frase Inspiracional / Bio:</label>
              <input
                type="text"
                name="frase"
                value={profissional.frase || ""}
                onChange={onPerfilChange}
              />
            </div>

            <div className="form-group-checkboxes">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="atendeOnline"
                  checked={profissional.atendeOnline}
                  onChange={onPerfilChange}
                />
                Atende Online
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="atendePresencial"
                  checked={profissional.atendePresencial}
                  onChange={onPerfilChange}
                />
                Atende Presencial
              </label>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Configuracao
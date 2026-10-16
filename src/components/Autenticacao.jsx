function Autenticacao({
  modo,
  setModo,
  nome,
  setNome,
  email,
  setEmail,
  senha,
  setSenha,
  profissao,
  setProfissao,
  mensagemErro,
  onSubmit
}) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>
          {modo === "login"
            ? "Acessar o AgendaPro"
            : "Criar Conta de Profissional"}
        </h2>

        {mensagemErro && (
          <div className="alerta-erro">
            {mensagemErro}
          </div>
        )}

        <form onSubmit={onSubmit}>
          {modo === "cadastro" && (
            <div className="form-group">
              <label>Seu Nome Completo:</label>
              <input
                type="text"
                placeholder="Ex: Dra. Ana Paula"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required/>
            </div>
          )}

          {modo === "cadastro" && (
            <div className="form-group">
              <label>Profissão / Especialidade:</label>
              <input
                type="text"
                placeholder="Ex: Psicóloga, Fisioterapeuta"
                value={profissao}
                onChange={(e) => setProfissao(e.target.value)}
                required/>
            </div>
          )}

          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>

          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required/>
          </div>

          <button type="submit" className="btn-auth">
            {modo === "login" ? "Entrar no Painel" : "Concluir Cadastro"}
          </button>
        </form>

        <div className="auth-alternar">
          {modo === "login" ? (
            <p>
              Ainda não tem conta?{" "}
              <button
                type="button"
                className="btn-link"
                onClick={() => setModo("cadastro")}> Cadastre-se
              </button>
            </p>
          ) : (
            <p>
              Já possui conta?{" "}
              <button
                type="button"
                className="btn-link"
                onClick={() => setModo("login")} > Fazer Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Autenticacao;
function Header({ titulo, setPaginaAtual, onSair }) {
  return (
    <header className="header">
      <div className="marca">
        <div className="marca-icone">AP</div>
        <div>
          <h1>{titulo}</h1>
          <p>Organize seu tempo, foque no que importa.</p>
        </div>
      </div>

      <nav>
        <button className="nav-btn-config" onClick={() => setPaginaAtual("home")}>
          Início
        </button>
        <button className="nav-btn-config" onClick={() => setPaginaAtual("configuracoes")}>
          Configurações
        </button>
        <button className="nav-btn-config btn-sair" onClick={onSair}>
          Sair
        </button>
      </nav>
    </header>
  );
}

export default Header;
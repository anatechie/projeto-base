function Footer({ texto }) {
  return (
    <footer className="footer">
      <div>
        <h2>
          Agenda<span>Pro</span>
        </h2>

        <p>
          Organize seu tempo, foque no que importa.
        </p>
      </div>

      <div className="footer-direita">
        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#profissional">Profissional</a>
        </nav>

        <p>{texto}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

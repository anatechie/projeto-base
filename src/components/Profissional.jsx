function Profissional({ profissional }) {
  const {
    nome,
    profissao,
    cidade,
    atendeOnline,
    atendePresencial
  } = profissional;

  function verificarOnline(atendeOnline) {
    if (atendeOnline) {
      return "Atendimento online";
    }

    return "Sem atendimento online";
  }

  function verificarPresencial(
    atendePresencial
  ) {
    if (atendePresencial) {
      return "Atendimento presencial";
    }

    return "Sem atendimento presencial";
  }

  return (
    <section
      className="profissional"
      id="profissional"
    >
      <div className="secao-titulo">
        <span className="secao-icone">P</span>
        <h2>Sua profissão</h2>
      </div>

      <div className="profissional-avatar">
        MS
      </div>

      <h3>{nome}</h3>
      <p className="profissao">{profissao}</p>

      <div className="profissional-dados">
        <p>📍  {cidade}</p>
        <p>▣ {verificarOnline(atendeOnline)}</p>
        <p>⌂ {verificarPresencial(atendePresencial)}</p>
      </div>

      <p className="profissional-frase">
        Cuidar de pessoas é transformar histórias.
      </p>
    </section>
  );
}

export default Profissional;

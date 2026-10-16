function Resumo({ resumo }) {
  const {
    nome,
    atendimentosHoje,
    valorRecebido,
    horariosDisponiveis
  } = resumo;

  return (
    <section className="resumo" id="inicio">
      <div className="resumo-topo">
        <div>
          <p className="etiqueta">BEM-VINDA DE VOLTA</p>
          <h2>
            Olá, <span>{nome}!</span>
          </h2>
          <p className="resumo-subtitulo">
            Aqui está o resumo da sua agenda de hoje.
          </p>
        </div>

        <div className="frase">
          <strong>“</strong>
          <p>
            Disciplina no presente resulta em
            tranquilidade no futuro.
          </p>
          <span>AgendaPro</span>
        </div>
      </div>

      <div className="resumo-cards">
        <div className="resumo-card">
          <span className="resumo-icone">01</span>
          <div>
            <p>Atendimentos hoje</p>
            <strong>{atendimentosHoje}</strong>
            <small>agendados para hoje</small>
          </div>
        </div>

        <div className="resumo-card">
          <span className="resumo-icone">R$</span>
          <div>
            <p>Valor recebido</p>
            <strong>R$ {valorRecebido}</strong>
            <small>em atendimentos hoje</small>
          </div>
        </div>

        <div className="resumo-card">
          <span className="resumo-icone">03</span>
          <div>
            <p>Horários disponíveis</p>
            <strong>{horariosDisponiveis}</strong>
            <small>na sua agenda de hoje</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resumo;

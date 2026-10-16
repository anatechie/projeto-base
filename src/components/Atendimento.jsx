
function Atendimento({ atendimento }) {

  const {
    cliente,
    servico,
    data,
    horario,
    modalidade,
    valor,
    pago,
    observacao
  } = atendimento;

 
  function verificarPagamento(pago) {
    if (pago) {
      return "Pagamento confirmado";
    }

    return "Pagamento pendente";
  }

  function verificarModalidade(modalidade) {
    if (modalidade === "Online") {
      return "O atendimento será realizado por videochamada.";
    }

    return "O atendimento será realizado presencialmente.";
  }

  const statusPagamento =
    verificarPagamento(pago);

  const statusModalidade =
    verificarModalidade(modalidade);

  return (
    <section
      className="atendimento"
      id="atendimento"
    >
      <div className="secao-titulo">
        <span className="secao-icone">A</span>
        <h2>Próximo atendimento</h2>
        <span className="data-destaque">
          Hoje, 25 de setembro
        </span>
      </div>

      <div className="atendimento-conteudo">
        <div className="cliente">
          <div className="avatar-cliente">
            {cliente.charAt(0)}
          </div>

          <div>
            <h3>{cliente}</h3>
            <p>{servico}</p>
          </div>
        </div>

        <div className="detalhes-atendimento">
          <div>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Horário:</strong> {horario}</p>
            <p><strong>Modalidade:</strong> {modalidade}</p>
            <p><strong>Valor:</strong> R$ {valor}</p>

            <div className="pagamento">
              <strong>{statusPagamento}</strong>
              <span>O pagamento já foi realizado.</span>
            </div>
          </div>

          <div className="modalidade-box">
            <span className="video-icone">▶</span>
            <strong>{statusModalidade}</strong>
            <p>{observacao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Atendimento;

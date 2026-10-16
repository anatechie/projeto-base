import Card from "./Card";

function Servicos({ servicos }) {

  return (
    <section
      className="servicos"
      id="servicos"
    >
      <div className="servicos-topo">
        <div>
          <p className="etiqueta">SERVIÇOS</p>
          <h2>Serviços oferecidos</h2>
        </div>

        <p>Conheça os serviços disponíveis</p>
      </div>


      <div className="cards">
        {servicos.map((servicos) => (
          <Card
            key={servicos.nome}
            titulo={servicos.nome}
            descricao={servicos.descricao}
            valor={servicos.valor}

          />
        ))}
      </div>
    </section>
  );
}

export default Servicos;

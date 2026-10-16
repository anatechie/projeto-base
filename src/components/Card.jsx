function Card({
  titulo,
  descricao,
  valor,
  children
}) {
  return (
    <div className="card">
      <div className="card-icone">
        {titulo.charAt(0)}
      </div>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <strong className="card-valor">
        R$ {valor}
      </strong>

      {children}
    </div>
  );
}

export default Card;

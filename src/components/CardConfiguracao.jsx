function CardConfiguracao({titulo, children}){
    return(
        <section className="card">
            <h2>{titulo}</h2>

            <div className="conteudo-card">
                {children}
            </div>
        </section>
    )
}

export default CardConfiguracao
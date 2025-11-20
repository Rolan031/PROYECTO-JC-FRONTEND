import "./Estadisticas.css"

export const Estadisticas = () =>{
    return(
        <>
        <main className="Cont-Main">
            <h2 className="Titulo-Esta">Estadisticas</h2>
            <section className="Cont-Generos">
                <h3>Top 3 generos Favoritos</h3>
            </section>
            <article className="Cont-Graficos">
            <section className="Cont-Grafico">
                 <h3>Tiempo promedio por juego</h3>
            <figure>

            </figure>
            </section>
            <section className="Cont-Grafico2">
                <h3>Horas jugadas por mes</h3>
                <figure>

                </figure>
            </section>
            </article>
        </main>
        
        </>
    )
}
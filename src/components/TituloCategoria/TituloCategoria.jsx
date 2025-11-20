import "./TituloCategoria.css"
import { useRef } from "react"

export const TituloCategoria = (props) => {
    const juegos = props.juegos || []
    const containerRef = useRef(null)
    
    const categorias = [
        'Acción',
        'Aventura',
        'RPG',
        'Estrategia',
        'Deportes',
        'Terror',
        'Puzzle',
        'Shooter'
    ]
    
    const scrollLeft = () => {
        if (containerRef.current) {
            const scrollAmount = 125 + 16; // ancho de imagen + gap
            containerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            })
        }
    }
    
    const scrollRight = () => {
        if (containerRef.current) {
            const scrollAmount = 125 + 16; // ancho de imagen + gap
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
        }
    }
    
    return(
        <section className="TarjetaTitulo">
        <h2>{props.titulo} </h2>
            <section className="Flechasmov">
                <button className="FlechaIzq" onClick={scrollLeft}> {props.izquierda} </button>
                <button className="FlechaDer" onClick={scrollRight}> {props.derecha} </button>
                </section>
        <div className="juegos-container" ref={containerRef}>
            {props.categorias ? (
                categorias.map((categoria, index) => (
                    <div key={index} className="categoria-item">
                        <div className="categoria-imagen">
                            <span className="categoria-texto">{categoria}</span>
                        </div>
                    </div>
                ))
            ) : juegos.length > 0 ? (
                juegos.map((juego) => (
                    <div key={juego._id} className="juego-item">
                        <img 
                            src={juego.imagenPortada || 'https://via.placeholder.com/200x300'} 
                            alt={juego.titulo} 
                            className="imagen"
                        />
                        <div className="juego-overlay">
                            <p className="juego-nombre">{juego.titulo}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="juego-item">
                    <div className="imagen-placeholder"></div>
                </div>
            )}
        </div>
        </section>
    )

}
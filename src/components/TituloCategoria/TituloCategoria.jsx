import "./TituloCategoria.css"
import perry from '../../assets/perry.jpg'
export const TituloCategoria = (props) => {
    return(
        <section className="TarjetaTitulo">
        <h2>{props.titulo} </h2>
            <section className="Flechasmov">
                <button className="FlechaIzq"> {props.izquierda} </button>
                <button className="FlechaDer"> {props.derecha} </button>
                </section>
                {/* La imagen debe ser pasada por props */ }
        <img src={perry} alt="Imagen Juego" className="imagen"/>
        
        </section>
    
    )

}
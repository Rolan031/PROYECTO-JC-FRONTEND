import "./TituloCategoria.css"
import perry from '../../assets/perry.jpg'
export const TituloCategoria = (props) => {
    return(
        <section className="TarjetaTitulo">
        <h2>{props.titulo} </h2>
                <button> {props.izquierda} </button>
                <button> {props.derecha} </button>
        <img src={perry} alt="Imagen Juego" className="imagen"/>
        
        </section>
    
    )

}
import "./Biblioteca.css"
import editar from "../../assets/edit_icon.png"
import add from "../../assets/add_icon.png"
import eliminar from "../../assets/trash_icon.png"
import { TituloCategoria } from "../../components/TituloCategoria/TituloCategoria"
export const Biblioteca = () => {
    return (
        <>

        <section className="SectionMain">
            <h2 className="TituloBiblioteca">Biblioteca</h2>
            <nav className="MainBiblioteca">
                <button className="Btn-Biblioteca"> Todos</button>
                <button className="Btn-Biblioteca">Favoritos</button>
                <p>Editar</p>
                <button >
                    <img src={editar} alt="Boton-Editar" className="Img-funcion" />
                </button>
                <p>Agregar</p>
                <button>
                    <img src={add} alt="Boton-Add" className="Img-funcion" />
                </button>
                <p>Eliminar</p>
                <button>
                    <img src={eliminar} alt="Boton-Eliminar" className="Img-funcion" />
                </button>
            </nav>
            <figure className="Figure-Img">
        
            </figure>
        </section>
        </>
    )
}
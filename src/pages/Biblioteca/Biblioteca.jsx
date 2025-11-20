import "./Biblioteca.css"
import editar from "../../assets/edit_icon.png"
import add from "../../assets/add_icon.png"
import eliminar from "../../assets/trash_icon.png"
import FormularioJuego from "../../components/FormularioJuego/FormularioJuego"
import { useState, useEffect } from "react"

export const Biblioteca = () => {
    const [formulario, setFormulario] = useState(false)
    const [juegos, setJuegos] = useState([])
    const [modoEditar, setModoEditar] = useState(false)
    const [modoEliminar, setModoEliminar] = useState(false)
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
    const [juegosSeleccionados, setJuegosSeleccionados] = useState([])

    useEffect(() => {
        fetchJuegos()
    }, [])

    const fetchJuegos = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/game')
            const data = await response.json()
            if (response.ok) {
                setJuegos(data)
            }
        } catch (error) {
            console.error('Error al obtener juegos:', error)
        }
    }

    const handleEditarClick = () => {
        setModoEditar(!modoEditar)
        setModoEliminar(false)
        setJuegosSeleccionados([])
    }

    const handleEliminarClick = () => {
        setModoEliminar(!modoEliminar)
        setModoEditar(false)
        setJuegoSeleccionado(null)
    }

    const handleJuegoClick = (juego) => {
        if (modoEditar) {
            setJuegoSeleccionado(juego)
            setFormulario(true)
            setModoEditar(false)
        } else if (modoEliminar) {
            if (juegosSeleccionados.includes(juego._id)) {
                setJuegosSeleccionados(juegosSeleccionados.filter(id => id !== juego._id))
            } else {
                setJuegosSeleccionados([...juegosSeleccionados, juego._id])
            }
        }
    }

    const handleEliminarSeleccionados = async () => {
        if (juegosSeleccionados.length === 0) return

        try {
            const promises = juegosSeleccionados.map(id => 
                fetch(`http://localhost:3000/api/game/${id}`, {
                    method: 'DELETE'
                })
            )
            await Promise.all(promises)
            setJuegosSeleccionados([])
            setModoEliminar(false)
            fetchJuegos()
        } catch (error) {
            console.error('Error al eliminar juegos:', error)
        }
    }

    const handleFormularioClose = () => {
        setFormulario(false)
        setJuegoSeleccionado(null)
        fetchJuegos()
    }

    return (
        <>
        <section className="SectionMain">
            <h2 className="TituloBiblioteca">Biblioteca</h2>
            <nav className="MainBiblioteca">
                <button className="Btn-Biblioteca"> Todos</button>
                <button className="Btn-Biblioteca">Favoritos</button>
                <p>Editar</p>
                <button onClick={handleEditarClick} className={modoEditar ? 'active' : ''}>
                    <img src={editar} alt="Boton-Editar" className="Img-funcion" />
                </button>
                <p>Agregar</p>
                <button onClick={() => {
                    setJuegoSeleccionado(null)
                    setFormulario(true)
                }}>
                    <img src={add} alt="Boton-Add" className="Img-funcion" />
                </button>
                <p>Eliminar</p>
                <button onClick={handleEliminarClick} className={modoEliminar ? 'active' : ''}>
                    <img src={eliminar} alt="Boton-Eliminar" className="Img-funcion" />
                </button>
                {modoEliminar && juegosSeleccionados.length > 0 && (
                    <button className="Btn-EliminarSeleccionados" onClick={handleEliminarSeleccionados}>
                        Eliminar ({juegosSeleccionados.length})
                    </button>
                )}
            </nav>
            <figure className="Figure-Img">
                {juegos.length === 0 ? (
                    <p className="no-games-message">No hay juegos en la biblioteca</p>
                ) : (
                    juegos.map((juego) => (
                        <article 
                            key={juego._id} 
                            className={`juego-card ${modoEliminar && juegosSeleccionados.includes(juego._id) ? 'seleccionado' : ''} ${modoEditar ? 'modo-editar' : ''}`}
                            onClick={() => handleJuegoClick(juego)}
                        >
                            <img 
                                src={juego.imagenPortada || 'https://via.placeholder.com/200x300'} 
                                alt={juego.titulo}
                                className="juego-imagen"
                            />
                            <figcaption className="juego-titulo">{juego.titulo}</figcaption>
                            {modoEliminar && (
                                <div className="checkbox-overlay">
                                    {juegosSeleccionados.includes(juego._id) && (
                                        <span className="checkmark">×</span>
                                    )}
                                </div>
                            )}
                        </article>
                    ))
                )}
            </figure>
        </section>
        {formulario && ( 
            <div className="modal-overlay" onClick={() => handleFormularioClose()}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <FormularioJuego 
                        onClose={handleFormularioClose}
                        juegoEditar={juegoSeleccionado}
                        onJuegoActualizado={fetchJuegos}
                    />
                </div>
            </div> )
        }
        </>
    )
}
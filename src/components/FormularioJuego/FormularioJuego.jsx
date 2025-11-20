import { useState, useEffect } from "react"
import './FormularioJuego.css'

const FormularioJuego = ({ onClose, juegoEditar, onJuegoActualizado }) => {
    const [titulo, setTitulo] = useState("")
    const [genero, setGenero] = useState("")
    const [plataforma, setPlataforma] = useState("")
    const [anoLanzamiento, setAnoLanzamiento] = useState("")
    const [desarrollador, setDesarrollador] = useState("")
    const [Detalles, setDetalles] = useState("")
    const [url, setUrl] = useState("")
    const [progreso, setProgreso] = useState(0)
    const [completado, setCompletado] = useState(false)

    useEffect(() => {
        if (juegoEditar) {
            setTitulo(juegoEditar.titulo || "")
            setGenero(juegoEditar.genero || "")
            setPlataforma(juegoEditar.plataforma || "")
            setAnoLanzamiento(juegoEditar.añoLanzamiento?.toString() || "")
            setDesarrollador(juegoEditar.desarrollador || "")
            setDetalles(juegoEditar.descripcion || "")
            setUrl(juegoEditar.imagenPortada || "")
            setProgreso(juegoEditar.progreso || 0)
            setCompletado(juegoEditar.completado || false)
        }
    }, [juegoEditar])
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const juegoData = {
            titulo,
            genero,
            plataforma,
            añoLanzamiento: parseInt(anoLanzamiento),
            desarrollador,
            descripcion: Detalles,
            imagenPortada: url,
            progreso: parseInt(progreso),
            completado
        }

        const apiUrl = juegoEditar 
            ? `http://localhost:3000/api/game/${juegoEditar._id}`
            : 'http://localhost:3000/api/game'
        
        const method = juegoEditar ? 'PUT' : 'POST'

        const response = await fetch(apiUrl, {
            method: method,
            body: JSON.stringify(juegoData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (response.ok){
            setTitulo("")
            setGenero("")
            setPlataforma("")
            setAnoLanzamiento("")
            setDesarrollador("")
            setDetalles("")
            setUrl("")
            setProgreso(0)
            setCompletado(false)
            console.log(juegoEditar ? 'Juego actualizado:' : 'Juego añadido:', json)
            if (onJuegoActualizado) {
                onJuegoActualizado()
            }
            if (onClose) {
                onClose()
            }
        }
        if (!response.ok){
            console.log(`Error al ${juegoEditar ? 'actualizar' : 'añadir'} el juego:`, json)
        }
    }
    

    return (
        <form className="Formulario" onSubmit={handleSubmit} >
            <h2>{juegoEditar ? 'Editar Juego' : 'Añade Un Juego'}</h2>

            <fieldset>
                <legend>Información Básica</legend>

                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                    id="titulo"
                    name="titulo"
                    maxLength="100"
                    required
                    placeholder="Ej: The Last of Us"
                />

                <label htmlFor="genero">Género</label>
                <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}
                    value={genero}>
                    <option value="">Selecciona un género</option>
                    <option value="Acción">Acción</option>
                    <option value="Aventura">Aventura</option>
                    <option value="RPG">RPG</option>
                    <option value="Estrategia">Estrategia</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Terror">Terror</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Shooter">Shooter</option>
                </select>

                <label htmlFor="plataforma">Plataforma</label>
                <select name="plataforma" id="plataforma" onChange={(e) => setPlataforma(e.target.value)}
                    value={plataforma}>
                    <option value="">Selecciona una plataforma</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation 5">PlayStation 5</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                    <option value="Xbox Series X/S">Xbox Series X/S</option>
                    <option value="Xbox One">Xbox One</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                    <option value="Movil">Móvil</option>
                    <option value="PlayStation 3">PlayStation 3</option>
                    <option value="PlayStation 2">PlayStation 2</option>
                    <option value="Xbox 360">Xbox 360</option>
                </select>

                <label htmlFor="anoLanzamiento">Año de Lanzamiento</label>
                <input
                    type="number"
                    id="anoLanzamiento"
                    name="anoLanzamiento"
                    min="1970"
                    max={new Date().getFullYear() + 2}
                    placeholder="2024"
                    onChange={(e) => setAnoLanzamiento(e.target.value)}
                    value={anoLanzamiento}
                />

                <label htmlFor="desarrollador">Desarrollador</label>
                <input
                    type="text"
                    id="desarrollador"
                    name="desarrollador"
                    maxLength="100"
                    placeholder="Ej: Naughty Dog"
                    onChange={(e) => setDesarrollador(e.target.value)}
                    value={desarrollador}
                />
            </fieldset>

            <fieldset>
                <legend>Detalles del Juego</legend>

                <label htmlFor="imagenPortada">URL de la Portada</label>
                <input
                    type="url"
                    id="imagenPortada"
                    name="imagenPortada"
                    placeholder="https://ejemplo.com/imagen.jpg"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                />

                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    rows="5"
                    maxLength="2000"
                    placeholder="Escribe una breve descripción del juego..."
                    onChange={(e) => setDetalles(e.target.value)}
                    value={Detalles}
                ></textarea>
            </fieldset>

            <fieldset>
                <legend>Progreso</legend>

                <label htmlFor="progreso">Progreso (%)</label>
                <input
                    type="number"
                    id="progreso"
                    name="progreso"
                    min="0"
                    max="100"
                    placeholder="0"
                    onChange={(e) => setProgreso(e.target.value)}
                    value={progreso}
                />

                <label>
                    <input
                        type="checkbox"
                        name="completado"
                        checked={completado}
                        onChange={(e) => setCompletado(e.target.checked)}
                    />
                    Juego completado
                </label>

            </fieldset>

            <div className="form-buttons">
                <button type="submit">{juegoEditar ? 'Actualizar Juego' : 'Agregar Juego'}</button>
                <button type="reset">Limpiar Formulario</button>
                {onClose && (
                    <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                )}
            </div>
        </form>
    )
}

export default FormularioJuego
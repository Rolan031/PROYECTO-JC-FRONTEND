import { TituloCategoria } from '../../components/TituloCategoria/TituloCategoria'
import './Home.css'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(() => {
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
        fetchJuegos()
    }, [])

    return (
        <main className="HomeMain">
            <article className='TarjetaJuego'>
                <TituloCategoria 
                    titulo="Jugado recientemente" 
                    izquierda="&lt;" 
                    derecha="&gt;" 
                    juegos={juegos}
                />
                <TituloCategoria 
                    titulo="Mas horas jugadas" 
                    izquierda="&lt;" 
                    derecha="&gt;" 
                    juegos={juegos}
                />
                <TituloCategoria 
                    titulo="Explorar por categoria" 
                    izquierda="&lt;" 
                    derecha="&gt;" 
                    categorias={true}
                />
            </article>
        </main>
    )
}


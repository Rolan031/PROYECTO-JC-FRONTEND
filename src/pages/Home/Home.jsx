import { TituloCategoria } from '../../components/TituloCategoria/TituloCategoria.jsx'
import './Home.css'

export const Home = () => {
    return (
        <main className="HomeMain">
            <div className="categoria-container">
                <TituloCategoria titulo="Jugado recientemente" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Mas horas jugadas" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Explorar por categoria" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Todos los juegos" izquierda="&lt;" derecha="&gt;" />
            </div>
        </main>
    )
}


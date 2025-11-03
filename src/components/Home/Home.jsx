import { TituloCategoria } from '../TituloCategoria/TituloCategoria.jsx'
import './Home.css'

export const Home = () => {
    return (
        <main className = "HomeMain">
            <div className="categoria-container">
                <TituloCategoria className= "section1" titulo="Explorar por categoria" izquierda="&lt;" derecha = "&gt;" />
                <TituloCategoria className= "section2" titulo="Todos los juegos" izquierda="&lt;" derecha = "&gt;" />
            </div>
        </main>
    )
}


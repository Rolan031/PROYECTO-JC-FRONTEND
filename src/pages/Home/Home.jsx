import { TituloCategoria } from '../../components/TituloCategoria/TituloCategoria.jsx'
import './Home.css'
import { MenuHamburguesa as SideBar } from '../../components/MenuHamburguesa/SideBar.jsx'
export const Home = () => {
    return (
        <main className="HomeMain">
            <SideBar/>            
            <article className='TarjetaJuego'>
                <TituloCategoria titulo="Jugado recientemente" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Mas horas jugadas" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Explorar por categoria" izquierda="&lt;" derecha="&gt;" />
                <TituloCategoria titulo="Todos los juegos" izquierda="&lt;" derecha="&gt;" />
            </article>
        </main>
    )
}


import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/1._Design3x redimensionado no back.png'
import { MenuHamburguesa as SideBar } from '../MenuHamburguesa/SideBar'

export const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <SideBar />
                <h1 className='Titulo-Header'>Bienvenido a LUDUS</h1>
            </div>
            <nav className="nav">
                <img src={logo} alt="Imagen Logo" />
                <div className="links">
                    <NavLink to="/inicio" end className="navElement">Inicio</NavLink>
                    <NavLink to="/Biblioteca" end className="navElement">Biblioteca</NavLink>
                    <NavLink to="/Estadisticas" end className="navElement">Estadisticas</NavLink>
                    <NavLink to="/Review" end className="navElement">Reseñas</NavLink>
                </div>
            </nav>
        </header>
    )
}


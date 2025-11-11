import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/1._Design3x redimensionado no back.png'

export const Header = () => {
    return (
        <header className= "header">
            <nav className = "nav">
            <h1>Bienvenido a LUDUS</h1>
            <img src={logo} alt="Imagen Logo" />
            <div className ="links">
            <NavLink to="/inicio" end className="navElement">Inicio</NavLink>
            <NavLink to="/Biblioteca" end className="navElement">Biblioteca</NavLink>
            <NavLink to="/Estadisticas"end className="navElement">Estadisticas</NavLink>
            <NavLink to="/Review"end className="navElement">Reseñas</NavLink>
            </div>
            </nav>
        </header>
    )
}


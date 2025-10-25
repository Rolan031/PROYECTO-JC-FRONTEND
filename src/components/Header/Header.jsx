import './Header.css'
import logo from '../../assets/1._Design3x redimensionado no back.png'

export const Header = () => {
    return (
        <header className= "header">
            <nav className = "nav">
            <h1>Welcome to Gametracker</h1>
            <img src={logo} alt="Imagen Logo" />
            <div className ="links">
            <a href="">Inicio</a>
            <a href="">Biblioteca</a>
            <a href="">Estadisticas</a>
            <a href="">Reseñas</a>
            </div>
            </nav>
        </header>
    )
}


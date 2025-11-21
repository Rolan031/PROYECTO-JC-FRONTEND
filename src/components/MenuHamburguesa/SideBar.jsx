import { useState, useEffect } from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

export const MenuHamburguesa = () => {
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        console.log(menu);
    })

    const cerrarMenu = () => setMenu(false)

    return (
        <section className="PrincipalMenu">
            <button
                className='MenuHamburguesa'
                onClick={() => setMenu(!menu)}
                aria-label="Abrir menú"
            >
                ☰
            </button>

            {/* Overlay oscuro */}
            {menu && (
                <div 
                    className="menu-overlay" 
                    onClick={cerrarMenu}
                    
                ></div>
            )}

            {/* Panel del menú */}
            {menu && (
                <aside className="AsideBar">
                    <button 
                        onClick={cerrarMenu} 
                        className='Btn-cerrar'
                        aria-label="Cerrar menú"
                    >
                        ✕
                    </button>

                    <NavLink 
                        to="/" 
                        end 
                        className="SideBarElement"
                        onClick={cerrarMenu}
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        to="/Biblioteca" 
                        end 
                        className="SideBarElement"
                        onClick={cerrarMenu}
                    >
                        Mi Biblioteca
                    </NavLink>
                   <NavLink 
                        to="/Review" 
                        end 
                        className="SideBarElement"
                        onClick={cerrarMenu}
                    >
                        Mis Reseñas
                    </NavLink>
                    <NavLink 
                        to="/Review" 
                        end 
                        className="SideBarElement"
                        onClick={cerrarMenu}
                    >
                        Acerca de
                    </NavLink>
                </aside>
            )}
        </section>
    )
}
import { useState, useEffect } from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

export const MenuHamburguesa = () => {
    const [menu, setMenu] = useState(false)
    const AbrirMenu = () => {
        setMenu(true);
    };

    const CerrarMenu = () => {
        setMenu(false);
    };
    useEffect(() => {
        console.log(menu);
    })
    return (
        <section className="PrincipalMenu">
            {!menu &&
            <button
                className='MenuHamburguesa'
                onClick={() => setMenu(true)}
            >
                ☰
            </button>}
            {menu &&
            <div className='bordeSide'>
            <aside className= "AsideBar">
                <button onClick={() => setMenu(false)} className='Btn-cerrar'>✕</button>

                    <NavLink to="/Review" end className="SideBarElement"onClick={() => setMenu(true)}>
                        Mis reseñas
                    </NavLink>
                     <NavLink to="/Review" end className="SideBarElement"onClick={() => setMenu(false)}>
                        Mi Biblioteca
                    </NavLink>
                    <button className="SideBarElement Btn-sidebar" onClick={() => setMenu(false)}>
                        + Agregar juego
                    </button>
                     <NavLink to="/Review" end className="SideBarElement"onClick={() => setMenu(false)}>
                        Claro/Oscuro
                    </NavLink>
                     <NavLink to="/Review" end className="SideBarElement"onClick={() => setMenu(false)}>
                        Acerca de
                    </NavLink>
            </aside>
            </div>
            }
        </section>
    )
}
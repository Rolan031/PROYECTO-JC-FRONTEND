import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { Review } from './pages/Review/review.jsx'
import { Biblioteca } from './pages/Biblioteca/Biblioteca.jsx'
import { MenuHamburguesa as SideBar } from './components/MenuHamburguesa/SideBar.jsx'
import "./index.css"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* Contenedor flex para menú + contenido */}
        <div className="main-layout">
          <SideBar />
  
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/inicio' element={<Home />} />
              <Route path='/Biblioteca' element={<Biblioteca />} />
              <Route path='/Review' element={<Review />} />
              <Route path='/' element={<Home />} />
              <Route path='/Estadisticas' element={<Home />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;



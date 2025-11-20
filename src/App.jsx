import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { Review } from './pages/Review/review.jsx'
import { Biblioteca } from './pages/Biblioteca/Biblioteca.jsx'
import { Estadisticas } from './pages/Estadisticas/Estadisticas.jsx'
import "./index.css"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* Contenedor flex*/}
        <div className="main-layout">
  
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/inicio' element={<Home />} />
              <Route path='/Biblioteca' element={<Biblioteca />} />
              <Route path='/Review' element={<Review />} />
              <Route path='/' element={<Home />} />
              <Route path='/Estadisticas' element={<Estadisticas />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home.jsx'

const App = () =>{
  return(
    <>
    <Router>
      <Home/>
      </Router>
    </>
  )
}

export default App

  
/*function Leccion(){
  const [nombre,setNombre] = useState("");

  return (
    <div className="containt">
      <input type="text" onChange={(e) =>{e.target.value}} />
      <button onClick={console.log(Hola)} aria-placeholder='Ingrese su nombre' id='nombre'>Saludar</button>
    </div>
  )
} */
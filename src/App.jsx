import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {

  return 
  <BrowserRouter>
  <div className="pages"></div>
  </BrowserRouter>
}

export default App

function Leccion(){
  const [nombre,setNombre] = useState("");

  return (
    <div className="containt">
      <input type="text" onChange={(e) =>{e.target.value}} />
      <button onClick={console.log(Hola)} aria-placeholder='Ingrese su nombre' id='nombre'>Saludar</button>
    </div>
  )
}
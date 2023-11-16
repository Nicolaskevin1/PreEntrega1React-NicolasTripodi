import './App.css'
import Navbar from './components/Navbar'
import Producto from './components/Producto'
function App() {

  return (
    
    <div className='App'>
      <Navbar></Navbar>
      <Producto Titulo= 'Producto' descripcion='Mostramos Producto'/>
    </div>
  
  )
}

export default App

import './App.css'
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer'
import Navbar from './components/Navbar'
import Producto from './components/Producto'
function App() {

  return (
    
    <div className='App'>
      <Navbar></Navbar>
      <Producto Titulo= 'Producto' descripcion='Mostramos Producto'/>
      <Itemlistcontainer greeting= 'Bienvenido tutor'/>
    </div>
  
  )
}

export default App

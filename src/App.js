import './App.css';
import ListaProductos from './components/ListaProductos';
import { useState, useEffect } from 'react';

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(()=>
  {
    const misProductos = async() =>
    {
      let peticion ='http://localhost:8080/productos/all';
      const peticionInicial = await fetch(peticion);
      const peticionResultados = await peticionInicial.json();
      setProductos(peticionResultados);
    }
    misProductos()
  }, []);

 
  return(
    <div className="container">
     <ListaProductos productos={productos}></ListaProductos>
    </div>
  )
}

export default App;

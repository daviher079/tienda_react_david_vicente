import { useState, useEffect } from 'react';

import ListaProductos from '../components/ListaProductos';
import Banner from '../components/Banner';
import Header from '../components/Header';

import { useParams } from 'react-router-dom';
function InicioCategoria(){

    let { name } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(()=>
    {
      const misProductos = async() =>
      {
        let peticion =`http://localhost:8080/categorias/findN/${name}`;
        const peticionInicial = await fetch(peticion);
        const peticionResultados = await peticionInicial.json();
        setProductos(peticionResultados.productos);
      }
      misProductos()
    }, [name]);

    const [categorias, setCategorias] = useState([]);

    useEffect(()=>
    {
      const misCategorias = async() =>
      {
        let peticion ='http://localhost:8080/categorias/all';
        const peticionInicial = await fetch(peticion);
        const peticionResultados = await peticionInicial.json();
        setCategorias(peticionResultados);
      }
      misCategorias()
    }, []);

    return(
        <div className="container">
            <Header categorias={categorias}></Header>
            <Banner></Banner>
            <ListaProductos productos={productos}></ListaProductos>
        </div>
    )

}


export default InicioCategoria;
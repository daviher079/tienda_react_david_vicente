import Header from "../components/Header";
import { useState, useEffect } from "react";
import ActualizarPerfil from "../components/ActualizarPerfil";

export default function VerPerfil() {
  const sectionStyle = {
    display: "flex",
    width: "300px",
  };

  const styleInterfazAside = {
    backgroundColor: "#9578bb",
    width: "300px",
    height: "90vh",
  };

  

  
  const [categorias, setCategorias] = useState([]);



  var mailSession = sessionStorage.getItem("mail");

  

  useEffect(() => {
    const misCategorias = async () => {
      let peticion = "http://localhost:8080/categorias/all";
      const peticionInicial = await fetch(peticion);
      const peticionResultados = await peticionInicial.json();
      setCategorias(peticionResultados);
    };

    misCategorias();
  }, []);

  return (
    <div>
      <Header categorias={categorias}></Header>

      <section style={sectionStyle}>
        <aside style={styleInterfazAside}>
          <h5>Hola,{mailSession}</h5>
        </aside>
        <article>
          <ActualizarPerfil />
        </article>
      </section>
    </div>
  );
}

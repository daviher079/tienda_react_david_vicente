import Header from "../components/Header";
import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
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

  const { mail } = useContext(UserContext);

  
  const [categorias, setCategorias] = useState([]);
  const [mail2, setMail2] = useState();

  const [datosUser, setDatosUser] = useState();
  var mailSession = sessionStorage.getItem("mail");

  

  useEffect(() => {
    const misCategorias = async () => {
      let peticion = "http://localhost:8080/categorias/all";
      const peticionInicial = await fetch(peticion);
      const peticionResultados = await peticionInicial.json();
      setCategorias(peticionResultados);
    };

    const misDatos = async () => {
        let peticion = `http://localhost:8080/usuarios/findByUser/${mailSession}`;
        const peticionInicial = await fetch(peticion);
        const peticionResultados = await peticionInicial.json();
        console.log('resultados: ' + peticionResultados)
        setDatosUser(peticionResultados);
    };
    misDatos();
    misCategorias();
    setMail2(sessionStorage.getItem("mail"));
  }, []);

  return (
    <div>
      <Header categorias={categorias}></Header>

      <section style={sectionStyle}>
        <aside style={styleInterfazAside}>
          <h5>Hola,{datosUser.email}</h5>
        </aside>
        <article>
          <ActualizarPerfil datosUserObject={datosUser} />
        </article>
      </section>
    </div>
  );
}

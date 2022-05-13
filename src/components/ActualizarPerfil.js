import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  var mailSession = sessionStorage.getItem("mail");

  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [direccion, setDireccion] = useState();
  const [provincia, setProvincia] = useState();
  const [localidad, setLocalidad] = useState();
  const [telefono, setTelefono] = useState();
  const [dni, setDNI] = useState();


  useEffect(() => {

    misDatos();

  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*let peticion = `http://localhost:8080/usuarios/findByMail/${user.mail}/${user.password}`;
    const peticionInicial = await fetch(peticion, {
      method: "PUT",
    });

    if (peticionInicial.ok === true) {
      console.log("Todo ok Jose Luis");
      

      sessionStorage.setItem("mail", user.mail);

      navigate("/VerPerfil");
    } else {
      console.log("No ok Jose Luis");
    }*/
  };

  const misDatos = async () => {
    let peticion = `http://localhost:8080/usuarios/findByUser/${mailSession}`;

    return await fetch(peticion, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setMail(response.email);
        setNombre(response.nombre);
        setApellido1(response.apellido1);
        setApellido2(response.apellido2);
        setDireccion(response.direccion);
        setProvincia(response.provincia);
        setLocalidad(response.localidad);
        setTelefono(response.telefono);
        setDNI(response.dni);
      });
  };

  return (
    <div className="container">

      <form method="put">
        <section>
          <label htmlFor="mail">
            Email
            <input
              type="email"
              name="mail"
              value={mail}
              onChange={(evento)=>{setMail(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="nombre">
            Nombre
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(evento)=>{setNombre(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="apellido1">
            Primer apellido
            <input
              type="text"
              name="apellido1"
              value={apellido1}
              onChange={(evento)=>{setApellido1(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="apellido2">
            Segundo Apellido
            <input
              type="text"
              name="apellido2"
              value={apellido2}
              onChange={(evento)=>{setApellido2(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="direccion">
            Direccion
            <input
              type="text"
              name="direccion"
              value={direccion}
              onChange={(evento)=>{setDireccion(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="provincia">
            Provincia
            <input
              type="text"
              name="provincia"
              value={provincia}
              onChange={(evento)=>{setProvincia(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="localidad">
            Localidad
            <input
              type="text"
              name="localidad"
              value={localidad}
              onChange={(evento)=>{setLocalidad(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="telefono">
            telefono
            <input
              type="text"
              name="telefono"
              value={telefono}
              onChange={(evento)=>{setTelefono(evento.target.value)}}
            />
          </label>
        </section>

        <section>
          <label htmlFor="dni">
            DNI
            <input type="text" 
            name="dni"
            onChange={(evento)=>{setDNI(evento.target.value)}}
            value={dni} />
          </label>
        </section>

        <section className="botonera-login">
          <button onClick={handleSubmit} >Actualizar</button>
        </section>
      </form>
    </div>
  );
}

export default Header;

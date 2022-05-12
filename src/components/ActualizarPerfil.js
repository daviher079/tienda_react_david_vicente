import React, { useEffect, useState } from "react";

function Header(props) {

    const {datosUserObject} = props;

    

    console.log(datosUserObject)
    var mailSession = sessionStorage.getItem("mail");

    const [datosUser, setDatosUser] = useState();
    const [user, setUser] = useState({
        mail: "",
        nombre: "",
        apellido1:"",
        apellido2:"",
        direccion:"",
        provincia:"",
        localidad:"",
        telefono:"",
        dni:""

      });

      const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
      };



    return(

        <form method="put">
        <section>
          <label htmlFor="mail">
            Email
            <input type="email" name="mail" onChange={handleChange} defaultValue={datosUserObject.email}/>
          </label>
        </section>

        <section>
          <label htmlFor="nombre">
            Nombre
            <input type="text" name="nombre" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="apellido1">
            Primer apellido
            <input type="text" name="apellido1" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="apellido2">
            Segundo Apellido
            <input type="text" name="apellido2" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="direccion">
            Direccion
            <input type="text" name="direccion" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="provincia">
            Provincia
            <input type="text" name="provincia" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="localidad">
            Localidad
            <input type="text" name="localidad" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="telefono">
            telefono
            <input type="text" name="telefono" onChange={handleChange} />
          </label>
        </section>

        <section>
          <label htmlFor="dni">
            DNI
            <input type="text" name="dni" onChange={handleChange} />
          </label>
        </section>

        <section className="botonera-login">
          
          <button>Actualizar</button>
        </section>
      </form>

    );
}

export default Header;
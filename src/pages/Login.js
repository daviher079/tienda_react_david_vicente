import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Login() {
  const {mail, setMail} = useContext(UserContext)
  // const navigate = useNavigate();
  //
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let peticion = `http://localhost:8080/usuarios/findByMail/${user.mail}/${user.password}`;
    const peticionInicial = await fetch(peticion,{
        method:"POST"
    });
    
    if(peticionInicial.ok===true){
        console.log("Todo ok Jose Luis")
        setMail(user.mail);
        console.log(mail)
       
    }else{
        console.log("No ok Jose Luis")
    }




    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Registrar usuario</h2>
      </header>
      <main className="App-main">
        <form method="post">
          <section>
            <label htmlFor="mail">
              Email
              <input type="email" name="mail" onChange={handleChange} />
            </label>
          </section>

          <section>
            <label htmlFor="password">
              Pass
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </section>

          <section className="botonera-login">
            <Link to="./RegistrarUsuarios">Nuevo Usuario</Link>
            <button onClick={handleSubmit}>Login</button>  
          </section>
        </form>
      </main>
    </div>
  );
}

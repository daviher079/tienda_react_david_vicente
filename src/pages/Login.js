import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css"





export default function Login() {
  
  const navigate = useNavigate();
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
    const peticionInicial = await fetch(peticion, {
      method: "POST",
    });

    if (peticionInicial.ok === true) {
      console.log("Todo ok Jose Luis");
      

      sessionStorage.setItem("mail", user.mail);

      navigate("/");
    } else {
      console.log("No ok Jose Luis");
    }
  };



  

  return (

    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">INTRODUCE TUS DATOS</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img">
              
			      </div>
						<div className="login-wrap p-4 p-md-5">
						
							<form method="POST" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" htmlFor="mail">Nombre </label>
			      			<input type="email" name="mail" onChange={handleChange} className="form-control" required/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" htmlFor="password">Password</label>
		            	<input type="password" name="password" onChange={handleChange} className="form-control" required/>
		             
		            </div>
		            <div className="form-group">
		            	
		            	<button onClick={handleSubmit} className="form-control btn btn-primary rounded submit px-3" >Login</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
                  <Link to="/">Volver</Link>
			            	
									</div>
									<div className="w-50 text-md-right">
									<Link to="./RegistrarUsuarios">Nuevo Usuario</Link>
									</div>
		            </div>
		          </form>
		          
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  );
}

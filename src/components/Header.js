import imagenes from "../assets/imagenes";
import "../assets/css/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

function Header(props) {
  const { categorias } = props;
  //const { mail } = useContext(UserContext);
  const [login, setLogin] = useState({
    etiqueta: "Login",
    url: "/Login",
  });

  var mailSession = sessionStorage.getItem("mail");
  useEffect(() => {
    if (mailSession !== null) {
      console.log("dentro de undefined");
      setLogin({
        etiqueta: "Ver perfil",
        url: "/VerPerfil",
      });
    }
  }, [mailSession]);

  return (
    <Navbar className="cabecera" expand="lg">
     
      <Container fluid>
        <Navbar.Brand href="/">
          {" "}
          <img
            className="logo_centro"
            src={imagenes.Centro_Comercial}
            alt=".."
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categorias"
              className="btn btn-outline-light"
              menuVariant="light"
            >
              {categorias.map((categoria) => {
                return (
                  <Link
                    to={`/categoria/${categoria.nombre}`}
                    key={categoria.id_categoria}
                    style={{ textDecoration: "none", textAlign: "center" }}
                  >
                    <p className="text-dark">{categoria.nombre}</p>
                  </Link>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Item className="btn btn-outline-light">
        <Link
            to={`${login.url}`}
            style={{ textDecoration: "none", textAlign: "center"}}>
            <span className="text-dark">  <AiOutlineShoppingCart />Carrito</span> 
            </Link>
        </Nav.Item>
        <Nav.Item className="btn btn-outline-light">
         
          <Link
            to={`${login.url}`}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <span className="text-dark">{login.etiqueta}</span>
          </Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Header;

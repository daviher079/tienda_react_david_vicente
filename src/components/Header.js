import imagenes from "../assets/imagenes";
import "../assets/css/header.css";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";


function Header(props) {
  const { categorias } = props;
  const { mail } = useContext(UserContext);
  return (

    <Navbar className="cabecera" expand="lg">
      <p>{mail}</p>
  <Container fluid>
    <Navbar.Brand href="#home"> <img
            className="logo_centro"
            src={imagenes.Centro_Comercial}
            alt=".."
          /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example" >
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Categorias"
          className="btn btn-outline-light"
          menuVariant="light">
            {
                categorias.map(
                    (categoria) => {
                        return (
                            <Link to={`/categoria/${categoria.nombre}`}  key={categoria.id_categoria} style={{ textDecoration: 'none', textAlign:'center'}}>
                                <p className="text-dark">{categoria.nombre}</p>

                            </Link>
                        );
                    }
                )
            }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Nav.Item className="btn btn-outline-light">
    <Nav.Link className="text-dark" href="/home"> <AiOutlineShoppingCart/> Carrito</Nav.Link>
  </Nav.Item>
  <Nav.Item className="btn btn-outline-light">
    <Nav.Link className="text-dark" href="/Login">Login</Nav.Link>
  </Nav.Item>
  </Container>
</Navbar>
  );
}




export default Header;

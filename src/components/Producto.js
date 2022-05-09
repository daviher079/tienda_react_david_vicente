import { FaCartPlus } from "react-icons/fa";

function Producto(props) {
  
    return (
      <div className="card h-100">
          <div height="246px">

        <img className="card-img-top" src={props.imagen} alt="..."  />
          </div>

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.nombre} </h5>

            {props.precio}

            <form action="Carrito" className="d-flex justify-content-left">
              <button type="submit" className="btn bg-transparent">
                <div className="btn btn-outline-dark mt-auto">
                  <FaCartPlus />
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a
              className="btn btn-outline-dark mt-auto"
              href="DetalleProducto?id=<%=art.getId()%>"
            >
              Ver Producto
            </a>
          </div>
        </div>
      </div>
    );
}

export default Producto;
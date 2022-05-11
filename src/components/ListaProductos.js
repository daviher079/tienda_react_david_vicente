
import Producto from "./Producto";

function ListaProductos(props) {
  const { productos } = props;
  

  return (
    <section className="py-5">
      
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            productos.map(
              (producto) => {
                return (
                    <div className="col mb-5" key={producto.id_producto}>
                      <Producto
                        nombre={producto.nombre}
                        imagen={producto.imagen}
                        precio={producto.precio}
                      ></Producto>
                    </div>
                );
              }
            )
          }
        </div>
      </div>
    </section>
  );
}
export default ListaProductos;

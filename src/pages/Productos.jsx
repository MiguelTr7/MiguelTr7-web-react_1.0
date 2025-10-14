import React from "react";
import { Link } from "react-router-dom";
import productos from "../data/productos";
import "../styles/productos.css";

function Productos({ onAgregar }) {
  // Función local que usa la prop onAgregar
  const handleAddToCart = (producto) => {
    onAgregar({ ...producto, cantidad: 1 });
  };

  return (
    <main>
      {/* Título principal */}
      <section className="seccion-titulo">
        <h2>Productos en venta</h2>
        <p className="sub">
          Selecciona una herramienta para ver su detalle o añadir al carrito.
        </p>
      </section>

      {/* Listado de productos */}
      <section className="productos" aria-label="Listado de productos">
        {productos.map((item) => (
          <article className="card" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p className="precio">${item.precio.toLocaleString("es-CL")}</p>
            <div className="card-acciones">
              {/* 🔗 Link al detalle */}
              <Link className="btn btn-primario" to={`/detalle/${item.id}`}>
                Detalle
              </Link>

              {/* 🛒 Botón de añadir */}
              <button
                className="btn btn-negro btn-add"
                onClick={() => handleAddToCart(item)}
              >
                Añadir
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Productos;



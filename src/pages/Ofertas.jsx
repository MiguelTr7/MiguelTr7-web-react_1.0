import React from "react";
import "../styles/ofertas.css";
import productos from "../data/productos";

function Ofertas({ onAgregar }) {
  // Simulamos descuentos
  const productosConDescuento = productos.map((p) => ({
    ...p,
    precioOriginal: p.precio,
    precioOferta: Math.round(p.precio * 0.8), // 20% descuento
  }));

  // Manejador de evento
  const handleAddToCart = (producto) => {
    const productoDescuento = {
      ...producto,
      precio: producto.precioOferta, // usar precio rebajado en el carrito
      cantidad: 1,
    };
    onAgregar(productoDescuento);
    alert(`🛒 ${producto.nombre} fue añadido al carrito.`);
  };

  return (
    <main className="ofertas">
      <section className="seccion-titulo">
        <h2>🔥 Ofertas Especiales</h2>
        <p className="sub">
          Aprovecha descuentos limitados en nuestras herramientas destacadas.
        </p>
      </section>

      <section className="ofertas-grid">
        {productosConDescuento.map((item) => (
          <article key={item.id} className="oferta-card">
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>

            <div className="precios">
              <span className="precio-oferta">
                ${item.precioOferta.toLocaleString("es-CL")}
              </span>
              <span className="precio-original">
                ${item.precioOriginal.toLocaleString("es-CL")}
              </span>
            </div>

            <button
              className="btn btn-primario"
              onClick={() => handleAddToCart(item)}
            >
              Añadir al carrito
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Ofertas;


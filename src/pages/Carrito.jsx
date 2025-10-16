import React from "react";
import "../styles/carrito.css";

function Carrito({ carrito, setCarrito }) {
  // 🗑️ Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito);
  };

  // ➕ Aumentar cantidad
  const aumentarCantidad = (id) => {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
    setCarrito(nuevoCarrito);
  };

  // ➖ Disminuir cantidad
  const disminuirCantidad = (id) => {
    const nuevoCarrito = carrito
      .map((prod) =>
        prod.id === id && prod.cantidad > 1
          ? { ...prod, cantidad: prod.cantidad - 1 }
          : prod
      )
      .filter((prod) => prod.cantidad > 0);
    setCarrito(nuevoCarrito);
  };

  // 💰 Calcular total
  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * (prod.cantidad || 1),
    0
  );

  return (
    <main>
      <section className="seccion-titulo">
        <h2>Tu carrito de compras</h2>
        <p className="sub">Revisa tus productos antes de finalizar la compra.</p>
      </section>

      {carrito.length === 0 ? (
        <p className="text-center mt-4">🛒 Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="tabla cart">
            <div className="t-row t-head">
              <span>Producto</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
              <span>Acciones</span>
            </div>

            {carrito.map((prod, index) => (
              <div className="t-row" key={`${prod.id}-${index}`}>
                <span>{prod.nombre}</span>
                <span>${prod.precio.toLocaleString("es-CL")}</span>
                <span className="cantidad-controles">
                  <button
                    className="btn-cant"
                    onClick={() => disminuirCantidad(prod.id)}
                  >
                    -
                  </button>
                  <span>{prod.cantidad || 1}</span>
                  <button
                    className="btn-cant"
                    onClick={() => aumentarCantidad(prod.id)}
                  >
                    +
                  </button>
                </span>
                <span>
                  ${(prod.precio * (prod.cantidad || 1)).toLocaleString("es-CL")}
                </span>
                <span>
                  <button
                    className="btn btn-sm btn-negro"
                    onClick={() => eliminarProducto(prod.id)}
                  >
                    Eliminar
                  </button>
                </span>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <h3>Total: ${total.toLocaleString("es-CL")}</h3>
            <button className="btn btn-primario mt-2">Finalizar compra</button>
          </div>
        </>
      )}
    </main>
  );
}

export default Carrito;

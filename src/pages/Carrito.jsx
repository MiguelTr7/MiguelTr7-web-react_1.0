import React, { useState } from "react";
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

  // 📝 Información del cliente
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [calle, setCalle] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [compraFinalizada, setCompraFinalizada] = useState(null); // 👈 Nuevo estado

  // Validación del formulario
  const validarFormulario = () => {
    return nombre && apellido && correo && calle && region && comuna;
  };

  // Función para finalizar compra
  const finalizarCompra = () => {
    if (validarFormulario()) {
      const numeroOrden = `ORD-${Date.now().toString().slice(-6)}`;
      const compraData = {
        numeroOrden,
        nombre,
        apellido,
        correo,
        calle,
        region,
        comuna,
        productos: [...carrito],
        total,
        fecha: new Date().toLocaleString("es-CL"),
      };
      setCompraFinalizada(compraData); // Guardar datos antes de vaciar
      setCarrito([]);
      setCompraExitosa(true);
    } else {
      setCompraExitosa(false);
    }
  };

  return (
    <main className="carrito">
      <section className="seccion-titulo">
        <h2>🛒 Tu carrito de compras</h2>
        <p className="sub">Revisa tus productos antes de finalizar la compra.</p>
      </section>

      {compraFinalizada ? (
        /* ===== PANTALLA DE CONFIRMACIÓN ===== */
        <div className="confirmacion-compra">
          <div className="header-confirmacion">
            <span className="check-icon">✅</span>
            <h2>Se ha realizado la compra. nro #{compraFinalizada.numeroOrden}</h2>
            <p className="codigo-orden">Código orden: {compraFinalizada.numeroOrden}</p>
          </div>

          <div className="datos-cliente">
            <h3>Completa la siguiente información</h3>
            <div className="input-group">
              <input type="text" value={compraFinalizada.nombre} readOnly />
              <input type="text" value={compraFinalizada.apellido} readOnly />
              <input type="email" value={compraFinalizada.correo} readOnly />
            </div>
          </div>

          <div className="direccion-entrega">
            <h3>Dirección de entrega de los productos</h3>
            <div className="input-group">
              <input type="text" value={compraFinalizada.calle} readOnly />
              <input type="text" placeholder="Departamento (opcional)" readOnly />
            </div>
            <div className="input-group">
              <select value={compraFinalizada.region} readOnly>
                <option>{compraFinalizada.region}</option>
              </select>
              <select value={compraFinalizada.comuna} readOnly>
                <option>{compraFinalizada.comuna}</option>
              </select>
            </div>
            <textarea
              placeholder="Indicaciones para la entrega (opcional)"
              readOnly
              defaultValue="El martes no estaremos en el depto, pero puede dejárselo con el conserje."
            ></textarea>
          </div>

          <div className="tabla-productos">
            <div className="t-row t-head">
              <span>Imagen</span>
              <span>Nombre</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
            </div>

            {compraFinalizada.productos.map((prod, index) => (
              <div className="t-row" key={`${prod.id}-${index}`}>
                <span className="imagen-placeholder">🎮</span>
                <span>{prod.nombre}</span>
                <span>${prod.precio.toLocaleString("es-CL")}</span>
                <span>{prod.cantidad || 1}</span>
                <span>${(prod.precio * (prod.cantidad || 1)).toLocaleString("es-CL")}</span>
              </div>
            ))}
          </div>

          <div className="total-final">
            <h3>Total pagado: ${compraFinalizada.total.toLocaleString("es-CL")}</h3>
          </div>

          <div className="acciones-boleta">
            <button className="btn btn-pdf">Imprimir boleta en PDF</button>
            <button className="btn btn-email">Enviar boleta por email</button>
          </div>
        </div>
      ) : carrito.length === 0 ? (
        /* ===== CARRITO VACÍO ===== */
        <div className="carrito-vacio">
          <p>🛒 Tu carrito está vacío.</p>
          <a href="/" className="btn btn-secundario">Seguir comprando</a>
        </div>
      ) : (
        /* ===== CARRITO CON PRODUCTOS ===== */
        <div className="contenedor-carrito">
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
                    −
                  </button>
                  <span className="cantidad-numero">{prod.cantidad || 1}</span>
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
                    className="btn btn-eliminar"
                    onClick={() => eliminarProducto(prod.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </span>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <div className="resumen-compra">
              <h3>Resumen de compra</h3>
              <p className="total-final">Total: <strong>${total.toLocaleString("es-CL")}</strong></p>
            </div>

            <section className="informacion-cliente">
              <h3>👤 Información del cliente</h3>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </section>

            <section className="direccion-entrega">
              <h3>📍 Dirección de entrega</h3>
              <input
                type="text"
                placeholder="Calle y número"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Comuna"
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value)}
                />
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Región</option>
                  <option value="Región Metropolitana de Santiago">Metropolitana</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Antofagasta">Antofagasta</option>
                </select>
              </div>
            </section>

            <button
              className="btn btn-primario btn-pagar"
              onClick={finalizarCompra}
              disabled={!validarFormulario()}
            >
              ✅ Finalizar compra
            </button>
          </div>

          {compraExitosa === false && (
            <div className="mensaje-error">
              <p>⚠️ Por favor, completa todos los campos.</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Carrito;
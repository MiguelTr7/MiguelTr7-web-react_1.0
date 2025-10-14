import React from "react";

function MiCuenta() {
  return (
    <main>
      <section className="seccion-titulo">
        <h2>Mi Cuenta</h2>
        <p className="sub">Aquí puedes revisar y editar tu información personal.</p>
      </section>

      <div className="profile-box">
        <h3>Datos de usuario</h3>
        <ul>
          <li><strong>Nombre:</strong> Juan Pérez</li>
          <li><strong>Correo:</strong> juan.perez@duoc.cl</li>
          <li><strong>Dirección:</strong> Av. Los Álamos 2345</li>
        </ul>
        <button className="btn btn-primario mt-2">Editar perfil</button>
      </div>

      <div className="profile-box">
        <h3>Historial de compras</h3>
        <div className="tabla">
          <div className="t-row t-head">
            <span>Producto</span>
            <span>Fecha</span>
            <span>Total</span>
          </div>
          <div className="t-row">
            <span>Teclado Mecánico</span>
            <span>12/10/2025</span>
            <span>$34.990</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MiCuenta;

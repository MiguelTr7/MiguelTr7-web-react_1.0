import React from "react";

function Admin() {
  return (
    <main>
      <section className="seccion-titulo">
        <h2>Panel de Administración</h2>
        <p className="sub">Gestiona los productos, usuarios y pedidos de TechNova Store.</p>
      </section>

      <div className="admin">
        <aside className="admin-menu">
          <h3>Menú</h3>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#usuarios">Usuarios</a></li>
            <li><a href="#pedidos">Pedidos</a></li>
          </ul>
        </aside>

        <section className="admin-content">
          <div className="admin-box" id="productos">
            <h3>Gestión de productos</h3>
            <form className="form form-grid">
              <div className="campo"><label>Nombre</label><input type="text" required /></div>
              <div className="campo"><label>Precio</label><input type="number" required /></div>
              <div className="campo"><label>Stock</label><input type="number" required /></div>
              <button className="btn btn-primario">Agregar producto</button>
            </form>
          </div>

          <div className="admin-box" id="usuarios">
            <h3>Gestión de usuarios</h3>
            <div className="tabla">
              <div className="t-row t-head">
                <span>Nombre</span>
                <span>Correo</span>
                <span>Rol</span>
                <span>Acciones</span>
              </div>
              <div className="t-row">
                <span>María Soto</span>
                <span>maria@duoc.cl</span>
                <span>Admin</span>
                <span><button className="btn btn-sm btn-negro">Eliminar</button></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;

import React from "react";
import "../styles/registro.css";

function RegistrarUsuario() {
  return (
    <main>
      <section className="auth">
        <div className="registro-card">
          <h2>🧰 Registro de Usuario</h2>
          <p className="sub">
            Crea tu cuenta para acceder a tus compras y promociones exclusivas.
          </p>

          <form className="form">
            <div className="campo">
              <label>RUN</label>
              <input type="text" placeholder="19.011.022-K" required />
            </div>

            <div className="campo">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>

            <div className="campo">
              <label>Apellidos</label>
              <input type="text" placeholder="Tus apellidos" required />
            </div>

            <div className="campo">
              <label>Correo electrónico</label>
              <input type="email" placeholder="correo@ejemplo.com" required />
            </div>

            <div className="campo">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="********"
                required
              />
            </div>

            <div className="campo">
              <label>Dirección</label>
              <input
                type="text"
                placeholder="Calle, número, comuna..."
                required
              />
            </div>

            <button className="btn btn-primario" type="submit">
              Crear cuenta
            </button>
          </form>

          <p className="sub mt-3">
            ¿Ya tienes cuenta?{" "}
            <a href="/iniciar-sesion" className="link-login">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default RegistrarUsuario;

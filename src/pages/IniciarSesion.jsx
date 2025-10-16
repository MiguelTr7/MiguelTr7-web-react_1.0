import React from "react";
import "../styles/styles.css";

function IniciarSesion() {
  return (
    <main>
      <section className="auth">
        <div className="auth-card">
          <h2>🔒 Iniciar sesión</h2>
          <p className="sub">Accede a tu cuenta para realizar compras y ver tus pedidos.</p>

          <form className="form">
            <div className="campo">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                placeholder="tu@duoc.cl"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="pass">Contraseña</label>
              <input
                id="pass"
                type="password"
                minLength="4"
                maxLength="10"
                placeholder="******"
                required
              />
            </div>

            <button type="submit" className="btn btn-primario">
              Ingresar
            </button>
          </form>

          <p className="sub">
            ¿No tienes cuenta?{" "}
            <a href="/registrar-usuario" className="link-registro">
              Regístrate aquí
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default IniciarSesion;

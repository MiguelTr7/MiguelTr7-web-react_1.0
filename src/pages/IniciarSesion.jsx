import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // 👈 Nuevo archivo CSS

function IniciarSesion() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Verificar si es admin
    if (formData.email === "admin@duoc.cl" && formData.password === "admin") {
      const adminData = {
        nombre: "Admin",
        email: "admin@duoc.cl",
        rol: "admin"
      };
      localStorage.setItem("adminActivo", JSON.stringify(adminData));
      navigate("/admin");
      return;
    }

    // Si no es admin, verificar usuarios normales
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    const usuarioEncontrado = usuarios.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
      navigate("/productos");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <main className="login-main">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="logo">
            <span className="icon">🔒</span>
            <h1>Ferretería React</h1>
          </div>
          
          <h2>Iniciar sesión</h2>
          <p className="sub">Accede a tu cuenta para realizar compras y ver tus pedidos.</p>

          {error && (
            <div className="alerta-error">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                name="email"
                placeholder="tu@duoc.cl"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="pass">Contraseña</label>
              <input
                id="pass"
                type="password"
                name="password"
                minLength="4"
                maxLength="10"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-ingresar">
              Ingresar
            </button>
          </form>

          <div className="registro-link">
            ¿No tienes cuenta?{" "}
            <a href="/registrar-usuario">Regístrate aquí</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IniciarSesion;
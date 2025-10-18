import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/registro.css";

function RegistrarUsuario() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    direccion: ""
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!validarEmail(formData.email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Guardar en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    // Verificar si el email ya existe
    const emailExiste = usuarios.some(user => user.email === formData.email);
    if (emailExiste) {
      setError("Este correo ya está registrado");
      return;
    }

    usuarios.push(formData);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Redireccionar a iniciar sesión
    navigate("/iniciar-sesion");
  };

  return (
    <main>
      <section className="auth">
        <div className="registro-card">
          <h2>🧰 Registro de Usuario</h2>
          <p className="sub">
            Crea tu cuenta para acceder a tus compras y promociones exclusivas.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error-message" style={{color: "red", marginBottom: "1rem"}}>{error}</p>}

            <div className="campo">
              <label>Nombre</label>
              <input 
                type="text" 
                name="nombre"
                placeholder="Tu nombre" 
                value={formData.nombre}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="campo">
              <label>Apellido</label>
              <input 
                type="text" 
                name="apellido"
                placeholder="Tu apellido" 
                value={formData.apellido}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="campo">
              <label>Correo electrónico</label>
              <input 
                type="email" 
                name="email"
                placeholder="correo@ejemplo.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="campo">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Dirección</label>
              <input
                type="text"
                name="direccion"
                placeholder="Calle, número, comuna..."
                value={formData.direccion}
                onChange={handleChange}
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
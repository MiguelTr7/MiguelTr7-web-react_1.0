import React from "react";
import "../styles/contacto.css"; // Asegúrate de tener un archivo CSS adecuado

function Contacto() {
  return (
    <main>
      <section className="seccion-titulo">
        <h2>Contacto</h2>
        <p className="sub">Envíanos tus consultas o sugerencias</p>
      </section>

      <form className="form">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            type="email"
            placeholder="tu@correo.cl"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primario">
          Enviar
        </button>
      </form>
    </main>
  );
}

export default Contacto;

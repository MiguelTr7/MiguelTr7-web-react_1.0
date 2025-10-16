import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog1.css"; // 👉 nuevo CSS separado
import Herramientas from "../assets/img/herramientas-manuales.jpg";

function Blog1() {
  return (
    <main className="blog1-detalle">
      {/* 🔹 Imagen de cabecera */}
      <div className="blog1-hero">
        <img src={Herramientas} alt="Guía básica de herramientas" />
        <div className="blog1-overlay">
          <h1>Guía básica de herramientas para principiantes 🧰</h1>
          <p>
            Todo lo que necesitas para comenzar tus proyectos en casa con seguridad,
            confianza y eficiencia.
          </p>
        </div>
      </div>

      {/* 🔹 Contenido principal */}
      <section className="blog1-contenido">
        <div className="blog1-intro">
          <p>
            Si estás comenzando en el mundo del bricolaje o las reparaciones domésticas,
            esta guía es para ti. Aquí aprenderás cuáles son las herramientas esenciales
            que te ayudarán a construir, reparar y mejorar tu hogar.
          </p>
        </div>

        <article className="blog1-section">
          <h2>🔧 Herramientas esenciales que no pueden faltar</h2>
          <p>
            Toda caja de herramientas debe tener los básicos que te permitirán resolver
            la mayoría de los trabajos caseros con facilidad:
          </p>

          <ul>
            <li><strong>Martillo:</strong> indispensable para clavar o retirar clavos.</li>
            <li><strong>Destornilladores:</strong> ten siempre uno plano y uno en cruz.</li>
            <li><strong>Cinta métrica:</strong> mide con precisión antes de cortar o instalar.</li>
            <li><strong>Alicates:</strong> útiles para doblar, cortar o ajustar piezas pequeñas.</li>
            <li><strong>Llaves ajustables:</strong> perfectas para plomería y tuercas.</li>
          </ul>
        </article>

        <article className="blog1-section">
          <h2>🧽 Consejos para mantener tus herramientas en buen estado</h2>
          <p>
            No basta con tener las herramientas correctas: también debes cuidarlas.
            Guarda todo en un lugar seco, limpia los restos de polvo o grasa tras cada uso
            y lubrica las partes metálicas con aceite para evitar el óxido.
          </p>
        </article>

        <blockquote className="blog1-quote">
          “El secreto de un buen trabajo no está solo en el talento, 
          sino también en las herramientas que usas.”
        </blockquote>

        <div className="blog1-final">
          <p>
            Con estas herramientas básicas y un poco de práctica, podrás realizar desde
            pequeñas reparaciones hasta proyectos más avanzados. 
            <strong> ¡Empieza hoy y conviértete en tu propio maestro de obras!</strong>
          </p>

          <div className="volver-blog">
            <Link to="/blogs" className="btn btn-primario">
              ← Volver a Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog1;

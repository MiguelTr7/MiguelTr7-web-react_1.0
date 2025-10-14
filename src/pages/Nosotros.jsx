import React from "react";
import "../styles/nosotros.css";
import equipoImg from "../assets/img/Equipo.jpg"; // puedes cambiarla por una de tu ferretería
import tallerImg from "../assets/img/Ferreteria.jpg"; // otra imagen ilustrativa

function Nosotros() {
  return (
    <main>
      {/* TÍTULO PRINCIPAL */}
      <section className="seccion-titulo">
        <h2>Quiénes somos</h2>
        <p className="sub">
          Ferretería React 🔩 — Comprometidos con la calidad, la confianza y el
          servicio que tus proyectos merecen.
        </p>
      </section>

      {/* SECCIÓN PRINCIPAL */}
      <section className="nosotros">
        <div className="nosotros-contenido">
          <article>
            <h3>Nuestra historia</h3>
            <p>
              Comenzamos como un pequeño emprendimiento familiar apasionado por
              las herramientas y el trabajo bien hecho. Hoy somos una ferretería
              moderna que combina experiencia, innovación y atención cercana.
            </p>

            <h3>Nuestra misión</h3>
            <p>
              Entregar productos de construcción, electricidad y carpintería de
              la mejor calidad, ayudando a profesionales y aficionados a lograr
              grandes resultados en cada proyecto.
            </p>

            <h3>Valores</h3>
            <ul className="lista-simple">
              <li>🔧 Compromiso con la calidad</li>
              <li>🤝 Atención cercana y personalizada</li>
              <li>🌱 Respeto por el trabajo y el medio ambiente</li>
            </ul>
          </article>

          <aside className="nosotros-imagen">
            <img src={tallerImg} alt="Ferretería moderna" />
          </aside>
        </div>

        {/* EQUIPO */}
        <section className="equipo">
          <h3>Nuestro equipo</h3>
          <p>
            Somos un grupo de profesionales dedicados a ofrecerte asesoría
            técnica, servicio confiable y soluciones prácticas para tus
            proyectos.
          </p>
          <div className="equipo-grid">
            <div className="miembro">
              <img src={equipoImg} alt="Juan Pérez" />
              <h4>Juan Pérez</h4>
              <p>Gerente General</p>
            </div>
            <div className="miembro">
              <img src={equipoImg} alt="María Soto" />
              <h4>María Soto</h4>
              <p>Encargada de Ventas</p>
            </div>
            <div className="miembro">
              <img src={equipoImg} alt="Miguel" />
              <h4>Miguel</h4>
              <p>Desarrollador Frontend</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Nosotros;


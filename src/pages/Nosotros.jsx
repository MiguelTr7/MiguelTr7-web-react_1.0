import React from "react";
import "../styles/nosotros.css";
import equipoImg from "../assets/img/Equipo.jpg";
import tallerImg from "../assets/img/Ferreteria.jpg";

function Nosotros() {
  return (
    <main className="nosotros-main">
      {/* 🔹 Portada Hero */}
      <section className="nosotros-hero">
        <div className="overlay">
          <h1>Ferretería React 🔩</h1>
          <p>
            Más que una ferretería, somos un equipo comprometido con tus ideas,
            tus proyectos y tus logros.
          </p>
        </div>
      </section>

      {/* 🔹 Historia y Misión */}
      <section className="nosotros-historia">
        <div className="nosotros-texto">
          <h2>Nuestra historia</h2>
          <p>
            Comenzamos como un pequeño emprendimiento familiar con la pasión de
            ayudar a construir sueños. Hoy, Ferretería React es un referente de
            innovación, calidad y cercanía con nuestros clientes.
          </p>

          <h2>Nuestra misión</h2>
          <p>
            Brindar herramientas y soluciones que impulsen la productividad de
            profesionales y aficionados, con un servicio basado en confianza,
            conocimiento y tecnología.
          </p>

          <h2>Valores que nos representan</h2>
          <ul className="valores-lista">
            <li>🔧 Compromiso con la calidad</li>
            <li>🤝 Atención cercana y personalizada</li>
            <li>🌱 Respeto por el trabajo y el medio ambiente</li>
          </ul>
        </div>

        <div className="nosotros-img">
          <img src={tallerImg} alt="Ferretería moderna" />
        </div>
      </section>

      {/* 🔹 Sección de equipo */}
      <section className="equipo-section">
        <h2>Nuestro equipo</h2>
        <p className="equipo-sub">
          Personas apasionadas por ayudarte a concretar tus proyectos con las
          mejores herramientas y asesoría.
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

      {/* 🔹 Sección final */}
      <section className="nosotros-final">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Porque trabajamos con pasión, experiencia y compromiso. Cada cliente
          es parte de nuestra historia, y cada proyecto que apoyamos refleja
          nuestro compromiso con la excelencia.
        </p>
        <button className="btn btn-primario">Contáctanos</button>
      </section>
    </main>
  );
}

export default Nosotros;

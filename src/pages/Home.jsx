import React from "react";
import { Link } from "react-router-dom"; // Usamos Link para navegación sin recargar
import martilloImg from "../assets/img/martillo.jpg";
import Taladro from "../assets/img/Taladro.jpg";
import Llaves from "../assets/img/Llaves.jpg";

function Home() {
  return (
    <main>
      {/* SECCIÓN HERO PRINCIPAL */}
      <section className="hero">
        <div className="hero-texto">
          <h2>Bienvenido a Ferretería React 🔧</h2>
          <p>
            Todo lo que necesitas para tus proyectos de construcción y hogar,
            con calidad garantizada.
          </p>
          <div className="hero-botones">
            <a href="/productos" className="btn btn-primario">
              Ver productos
            </a>
            <a href="/contacto" className="btn btn-secundario">
              Contáctanos
            </a>
          </div>
        </div>

        <div className="hero-imagen">
          <img src="/img/ferreteria-hero.jpg" alt="Herramientas de ferretería" />
        </div>
      </section>

      {/* SECCIÓN DE DESTACADOS */}
      <section className="destacados">
        <h3>Productos destacados</h3>
        <div className="destacados-grid">
          {/* Producto 1 */}
          <article className="producto">
            <img src={martilloImg} alt="Martillo de acero" />
            <h4>Martillo de acero</h4>
            <p>Resistente y duradero, ideal para uso profesional.</p>
            {/* Botón de detalle */}
            <Link className="btn btn-primario" to="/detalle/1">
              Ver detalle
            </Link>
          </article>

          {/* Producto 2 */}
          <article className="producto">
            <img src={Taladro} alt="Taladro inalámbrico" />
            <h4>Taladro inalámbrico</h4>
            <p>Batería recargable y múltiples velocidades.</p>
            {/* Botón de detalle */}
            <Link className="btn btn-primario" to="/detalle/2">
              Ver detalle
            </Link>
          </article>

          {/* Producto 3 */}
          <article className="producto">
            <img src={Llaves} alt="Juego de llaves" />
            <h4>Juego de llaves</h4>
            <p>Incluye medidas estándar y métricas de alta precisión.</p>
            {/* Botón de detalle */}
            <Link className="btn btn-primario" to="/detalle/3">
              Ver detalle
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;

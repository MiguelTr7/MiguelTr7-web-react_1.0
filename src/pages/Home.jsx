import React from "react";
import { Link } from "react-router-dom"; // Usamos Link para navegación sin recargar
import martilloImg from "../assets/img/martillo.jpg";
import Taladro from "../assets/img/Taladro.jpg";
import Llaves from "../assets/img/Llaves.jpg";

function Home() {
  return (
    <main>
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

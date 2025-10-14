import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="inner">
        <h3 className="footer-brand">Ferretería React 🔩</h3>

        {/* Enlaces de navegación del pie de página */}
        <nav aria-label="Categorías">
          <ul className="footer-links">
            <li><a href="/productos">Herramientas</a></li>
            <li><a href="/contacto">Contáctanos</a></li>
          </ul>
        </nav>

        {/* Formulario de suscripción */}
        <form className="suscripcion" action="#">
          <label htmlFor="email" className="sr-only">Suscríbete</label>
          <input id="email" type="email" placeholder="tu correo" required />
          <button type="submit">Suscribirme</button>
        </form>

        {/* Derechos reservados */}
        <p className="copy">
          © 2025 Ferretería React | Desarrollado por Miguel
        </p>
      </div>
    </footer>
  );
}

export default Footer;

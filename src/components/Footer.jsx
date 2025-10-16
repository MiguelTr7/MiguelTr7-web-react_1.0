import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Marca y descripción */}
        <div className="footer-brand">
          <h3>Ferretería React 🔩</h3>
          <p>
            Tu aliado en cada proyecto. Calidad, confianza y herramientas para
            construir tus ideas.
          </p>
        </div>

        {/* 🔹 Formulario de suscripción */}
        <div className="footer-newsletter">
          <h4>Suscríbete</h4>
          <p>Recibe ofertas exclusivas y novedades directamente en tu correo.</p>
          <form>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* 🔹 Línea inferior */}
      <div className="footer-bottom">
        <p>© 2025 Ferretería React | Desarrollado por Miguel</p>
      </div>
    </footer>
  );
}

export default Footer;

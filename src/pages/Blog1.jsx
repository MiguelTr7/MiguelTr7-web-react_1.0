import React from "react";

function Blog1() {
  return (
    <main>
      <article className="post">
        <h2>Los mejores periféricos gamers de 2025</h2>
        <img className="post-img" src="/images/blog-perifericos.jpg" alt="Periféricos gamers" />
        <p>
          Desde teclados mecánicos hasta audífonos con cancelación de ruido, la experiencia gamer depende del equipamiento.
        </p>
        <ol className="lista-simple">
          <li>Teclados RGB con switches mecánicos</li>
          <li>Mouse ergonómicos y precisos</li>
          <li>Audífonos envolventes</li>
          <li>Sillas gamers con soporte lumbar</li>
        </ol>
        <a className="btn btn-secundario" href="/blogs">Volver</a>
      </article>
    </main>
  );
}

export default Blog1;

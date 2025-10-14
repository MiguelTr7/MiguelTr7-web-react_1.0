import React from "react";

function Blogs() {
  return (
    <main>
      <section className="seccion-titulo">
        <h2>Blogs</h2>
        <p className="sub">Consejos y noticias del mundo tech</p>
      </section>

      <section className="productos" aria-label="Listado de artículos">
        <article className="card">
          <img src="/images/blog-notebook.jpg" alt="Notebook para programar" />
          <h3>Cómo elegir un notebook para programar</h3>
          <p>Descubre las características más importantes a considerar para estudiar o trabajar en desarrollo web.</p>
          <a href="/blog-2" className="btn btn-primario">Leer más</a>
        </article>

        <article className="card">
          <img src="/images/blog-perifericos.jpg" alt="Periféricos gamers" />
          <h3>Los mejores periféricos gamers de 2025</h3>
          <p>Te mostramos los teclados, mouse y audífonos que marcan tendencia este año.</p>
          <a href="/blog-1" className="btn btn-primario">Leer más</a>
        </article>
      </section>
    </main>
  );
}

export default Blogs;

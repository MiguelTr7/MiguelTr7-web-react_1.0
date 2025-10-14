import React from "react";

function Blog2() {
  return (
    <main>
      <article className="post">
        <h2>Cómo elegir un notebook para programar</h2>
        <img className="post-img" src="/images/blog-notebook.jpg" alt="Notebook para programar" />
        <p>
          Para desarrollo web o ingeniería, los recursos de hardware marcan la diferencia entre productividad y frustración.
        </p>
        <ol className="lista-simple">
          <li>RAM de 8GB o más</li>
          <li>Disco SSD de 256GB o más</li>
          <li>Procesador de múltiples núcleos</li>
          <li>Pantalla FHD de 14 a 15 pulgadas</li>
        </ol>
        <a className="btn btn-secundario" href="/blogs">Volver</a>
      </article>
    </main>
  );
}

export default Blog2;

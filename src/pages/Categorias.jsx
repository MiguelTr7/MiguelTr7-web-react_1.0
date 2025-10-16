import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/categorias.css";
import productos from "../data/productos"; // Traemos los productos
import categorias from "../data/categorias"; // Traemos las categorías

function Categorias() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Filtramos los productos según la categoría seleccionada
  const filtrarProductos = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
    if (categoriaId) {
      const productosPorCategoria = productos.filter(
        (producto) => producto.categoriaId === categoriaId
      );
      setProductosFiltrados(productosPorCategoria);
    }
  };

  // Mostrar todos los productos
  const verTodosLosProductos = () => {
    setCategoriaSeleccionada(null);
    setProductosFiltrados(productos);
  };

  return (
    <main className="categorias">
      {/* Título */}
      <section className="seccion-titulo">
        <h2>Explora nuestras categorías</h2>
        <p className="sub">
          Encuentra herramientas y productos según tu proyecto.
        </p>
      </section>

      {/* Botones de categorías */}
      <section className="categorias-grid">
        <button
          className="btn btn-secundario"
          onClick={verTodosLosProductos}
        >
          Ver todos los productos
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            className="btn btn-primario"
            onClick={() => filtrarProductos(categoria.id)}
          >
            {categoria.nombre}
          </button>
        ))}
      </section>

      {/* Productos filtrados */}
      <section className="productos-grid">
        {productosFiltrados.length === 0 ? (
          <p className="no-productos">Selecciona una categoría para ver los productos.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <article key={producto.id} className="producto">
              <img src={producto.imagen} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <p>${producto.precio}</p>
              <Link to={`/detalle/${producto.id}`} className="btn btn-secundario">
                Ver detalle
              </Link>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Categorias;

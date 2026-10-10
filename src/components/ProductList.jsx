import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = ({ carrito, onAgregar, busqueda, categoriaActiva, setCategoriaActiva, subCategoriaActiva, setSubCategoriaActiva }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error cargando productos:", error));
  }, []);

  const productosFiltrados = productos.filter((p) => {
    const coincideTexto = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideMarca = categoriaActiva === 'todas' || p.marca === categoriaActiva;
    const coincideSub = subCategoriaActiva === 'todos' || p.categoria === subCategoriaActiva;
    return coincideTexto && coincideMarca && coincideSub;
  });

  return (
    <section className="col-lg-8" id="inicio">
      <h3 className="mb-4 fw-bold text-dark border-start border-4 ps-2" style={{ borderColor: 'var(--weplay-cyan) !important' }}>
        Productos Destacados
      </h3>

      <div className="mb-3 d-flex gap-2 flex-wrap">
        {['todas', 'PlayStation', 'Nintendo', 'Xbox', 'Polystation'].map(marca => (
          <button
            key={marca}
            className={`btn btn-sm fw-bold px-3 ${categoriaActiva === marca ? 'btn-weplay' : 'btn-outline-weplay'}`}
            onClick={() => setCategoriaActiva(marca)}
          >
            {marca.charAt(0).toUpperCase() + marca.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-4 d-flex gap-2 flex-wrap">
        {['todos', 'Consolas', 'Juegos Físicos'].map(sub => (
          <button
            key={sub}
            className={`btn btn-sm rounded-pill px-3 ${subCategoriaActiva === sub ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setSubCategoriaActiva(sub)}
          >
            {sub.charAt(0).toUpperCase() + sub.slice(1)}
          </button>
        ))}
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="alert alert-warning text-center shadow-sm">
          No se encontraron productos para esta búsqueda o filtro.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {productosFiltrados.map((producto) => {
            const isInCart = carrito.some((item) => item.id === producto.id);
            return (
              <ProductCard 
                key={producto.id} 
                producto={producto} 
                onAgregar={onAgregar} 
                isInCart={isInCart} 
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
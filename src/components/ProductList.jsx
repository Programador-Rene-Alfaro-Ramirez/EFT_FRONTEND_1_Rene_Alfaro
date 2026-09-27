import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = ({ productos, onAgregar }) => {
  return (
    <section className="col-lg-8" id="seccion-catalogo" aria-labelledby="titulo-catalogo">
      <h2 id="titulo-catalogo" className="titulo-seccion mb-4 h4">
        Productos Destacados
      </h2>

      {/* Renderizado condicional: Si el arreglo está vacío (no hay coincidencias en el buscador) */}
      {productos.length === 0 ? (
        <div className="alert alert-warning text-center py-4 shadow-sm" role="alert">
          <p className="fs-5 mb-0">No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="row">
          {/* Mapeo del arreglo de productos para renderizar las tarjetas */}
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onAgregar={onAgregar}
            />
          ))}
        </div>
      )}
    </section>
  );
};
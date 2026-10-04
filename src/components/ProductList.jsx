import React from 'react';
import { ProductCard } from './ProductCard';

// Recibimos 'carrito' como prop adicional
export const ProductList = ({ productos, onAgregar, carrito = [] }) => {
  return (
    <section className="col-lg-8" id="seccion-catalogo" aria-labelledby="titulo-catalogo">
      <h2 id="titulo-catalogo" className="titulo-seccion mb-4 h4">
        Productos Destacados
      </h2>

      {/* Renderizado condicional: si el arreglo está vacío (no hay coincidencias en el buscador) */}
      {productos.length === 0 ? (
        <div className="alert alert-warning text-center py-4 shadow-sm" role="alert">
          <p className="fs-5 mb-0">No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="row">
          {/* Mapeo del arreglo de productos para renderizar las tarjetas */}
          {productos.map((producto) => {
            // Verificamos si este producto específico ya existe en el arreglo del carrito
            const isInCart = carrito.some((item) => item.id === producto.id);
            
            return (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAgregar={onAgregar}
                isInCart={isInCart} // Pasamos el estado booleano a la tarjeta
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
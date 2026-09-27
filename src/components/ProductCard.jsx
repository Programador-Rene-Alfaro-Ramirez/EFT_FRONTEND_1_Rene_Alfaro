import React from 'react';
import { formatearMoneda } from '../data/products';

export const ProductCard = ({ producto, onAgregar }) => {
  // Extraemos las propiedades del producto
  const { nombre, precioNormal, precioOferta, enOferta, descripcion, imagen } = producto;

  return (
    <div className="col-md-6 col-lg-6 mb-4">
      <article className="card h-100 shadow-sm tarjeta-producto position-relative">
        
        {/* Renderizado condicional: Si está en oferta, mostramos un pequeño cartel */}
        {enOferta && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-3 shadow-sm z-1">
            OFERTA
          </span>
        )}

        <img 
          src={imagen} 
          className="card-img-top p-3" 
          alt={nombre} 
          style={{ height: '210px', objectFit: 'contain', background: '#fff' }} 
        />
        
        <div className="card-body d-flex flex-column text-center">
          <h3 className="card-title h6 fw-bold mb-2 text-dark">{nombre}</h3>
          <p className="card-text text-muted small flex-grow-1">{descripcion}</p>
          
          <div className="mt-3">
            {/* Renderizado condicional: Mostrar precio normal tachado si hay oferta */}
            {enOferta && (
              <span className="d-block text-decoration-line-through text-muted small mb-1">
                Normal: {formatearMoneda(precioNormal)}
              </span>
            )}
            <span className="d-block fs-5 fw-bold mb-3" style={{ color: 'var(--ps-cyan)' }}>
              {enOferta ? formatearMoneda(precioOferta) : formatearMoneda(precioNormal)}
            </span>
            
            {/* Evento onClick para agregar al carrito (Exigencia de la pauta) */}
            <button 
              className="btn btn-polystation-cyan w-100 fw-semibold" 
              onClick={() => onAgregar(producto)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
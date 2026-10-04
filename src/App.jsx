import React, { useState, useEffect } from 'react';
import { productosData } from './data/products';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

export const App = () => {
  // --- GESTIÓN DE ESTADOS (Criterio 1: useState) ---
  const [productos, setProductos] = useState([]); // Inicia vacío para cargar dinámicamente
  const [cargando, setCargando] = useState(true); // Estado para feedback de carga
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [notificacion, setNotificacion] = useState("");

  // --- MANEJO DE EFECTOS (Criterio 2: useEffect para carga dinámica) ---
  useEffect(() => {
    // Simulamos una petición asíncrona a una API o base de datos externa
    const obtenerProductos = () => {
      setTimeout(() => {
        setProductos(productosData);
        setCargando(false);
      }, 800); // 800ms de retraso simulado
    };

    obtenerProductos();
  }, []); // Se ejecuta solo una vez al montar el componente

  const mostrarMensaje = (texto) => {
    setNotificacion(texto);
    setTimeout(() => setNotificacion(""), 2500);
  };

  // --- FUNCIONES DEL CARRITO ---
  const handleAgregar = (producto) => {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.id === producto.id);
      if (existe) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...actual, { ...producto, cantidad: 1 }];
    });
    mostrarMensaje(`"${producto.nombre}" agregado al carrito.`);
  };

  const handleAumentar = (id) => {
    setCarrito((actual) =>
      actual.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const handleDisminuir = (id) => {
    setCarrito((actual) => {
      const item = actual.find((i) => i.id === id);
      if (item.cantidad === 1) return actual.filter((i) => i.id !== id);
      return actual.map((i) =>
        i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i
      );
    });
  };

  const handleEliminar = (id) => {
    setCarrito((actual) => actual.filter((item) => item.id !== id));
    mostrarMensaje(`Producto eliminado del carrito.`);
  };

  const handleVaciar = () => {
    if (carrito.length > 0) {
      setCarrito([]);
      mostrarMensaje(`El carrito ha sido vaciado.`);
    }
  };

  // --- FUNCIONES DEL MENÚ DE NAVEGACIÓN ---
  const handleFiltroConsolas = (e) => {
    e.preventDefault();
    setCategoria('consolas');
    setBusqueda(''); 
  };

  const handleFiltroJuegos = (e) => {
    e.preventDefault();
    setCategoria('juegos');
    setBusqueda(''); 
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCategoria('todos');
    setBusqueda('');
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
    setCategoria('todos'); 
  };

  // --- FILTRADO PRINCIPAL ---
  const productosFiltrados = productos.filter((p) => {
    // 1. Filtramos por la categoría
    let matchCategoria = true;
    if (categoria === 'consolas') {
      matchCategoria = p.nombre.toLowerCase().includes('consola');
    } else if (categoria === 'juegos') {
      matchCategoria = !p.nombre.toLowerCase().includes('consola');
    }

    // 2. Filtramos por lo que está escrito en el buscador
    const matchBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                          p.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    return matchCategoria && matchBusqueda;
  });

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precioOferta * item.cantidad, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header 
        busqueda={busqueda}
        onBusquedaChange={handleBusquedaChange}
        totalItems={totalItems}
        onFiltroConsolas={handleFiltroConsolas}
        onFiltroJuegos={handleFiltroJuegos}
        onReset={handleReset}
        categoriaActiva={categoria}
      />
      
      {notificacion && <div className="alert-toast shadow-lg">{notificacion}</div>}

      <main className="container my-5 flex-grow-1">
        {/* Renderizado condicional mientras cargan los productos (Criterio 3) */}
        {cargando ? (
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <div className="spinner-border text-primary mb-3" role="status" style={{width: '3rem', height: '3rem'}}></div>
            <h4 className="text-muted">Cargando catálogo de videojuegos...</h4>
          </div>
        ) : (
          <div className="row">
            <ProductList productos={productosFiltrados} onAgregar={handleAgregar} />
            <Cart 
              carrito={carrito}
              totalItems={totalItems}
              totalPrecio={totalPrecio}
              onAumentar={handleAumentar}
              onDisminuir={handleDisminuir}
              onEliminar={handleEliminar}
              onVaciar={handleVaciar}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
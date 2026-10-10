import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [carrito, setCarrito] = useState([]);
  
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('todas'); 
  const [subCategoriaActiva, setSubCategoriaActiva] = useState('todos');

  const onAgregar = (producto) => {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  };

  const onAumentar = (id) => {
    setCarrito(carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
  };

  const onDisminuir = (id) => {
    setCarrito(carrito.map(item => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1 };
      }
      return item;
    }));
  };

  const onEliminar = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const onVaciar = () => { 
    setCarrito([]); 
    alert('Has vaciado el carrito de compras'); 
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const onBusquedaChange = (e) => setBusqueda(e.target.value);
  const onReset = () => { setBusqueda(''); setCategoriaActiva('todas'); setSubCategoriaActiva('todos'); };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header 
        busqueda={busqueda} 
        onBusquedaChange={onBusquedaChange} 
        totalItems={totalItems} 
        onReset={onReset}
      />

      <main className="container my-5 flex-grow-1">
        <div className="row">
          <ProductList 
            carrito={carrito} 
            onAgregar={onAgregar} 
            busqueda={busqueda}
            categoriaActiva={categoriaActiva}
            setCategoriaActiva={setCategoriaActiva}
            subCategoriaActiva={subCategoriaActiva}
            setSubCategoriaActiva={setSubCategoriaActiva}
          />
          
          <Cart 
            carrito={carrito} 
            totalItems={totalItems} 
            totalPrecio={totalPrecio} 
            onAumentar={onAumentar} 
            onDisminuir={onDisminuir} 
            onEliminar={onEliminar} 
            onVaciar={onVaciar} 
          />
        </div>

        <section id="contacto" className="mt-5 pt-5 border-top">
          <h3 className="text-center fw-bold mb-4" style={{ color: 'var(--weplay-cyan)' }}>Contáctanos</h3>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
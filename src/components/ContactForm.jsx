import React, { useState } from 'react';

const ContactForm = () => {
const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
const [error, setError] = useState('');
const [exito, setExito] = useState(false);
const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setExito(false);
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
    setError('Todos los campos son obligatorios.');
    return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
    setError('Por favor, ingresa un correo electrónico válido.');
    return;
    }
    setExito(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
};

return (
    <div className="container d-flex justify-content-center pb-5">
    <div className="card card-weplay p-4 w-100" style={{ maxWidth: '600px' }}>
        {error && <div className="alert alert-danger">{error}</div>}
        {exito && <div className="alert alert-success">¡Mensaje enviado con éxito!</div>}
        
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold text-muted">Nombre completo</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Juan Pérez" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold text-muted">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@correo.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="mensaje" className="form-label fw-bold text-muted">Mensaje</label>
            <textarea className="form-control" id="mensaje" name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu consulta..."></textarea>
        </div>
        <button type="submit" className="btn btn-weplay w-100 fw-bold">Enviar Mensaje</button>
        </form>
    </div>
    </div>
);
};

export default ContactForm;
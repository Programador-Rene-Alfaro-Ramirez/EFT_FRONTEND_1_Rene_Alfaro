export const productosData = [
{
    id: 1,
    nombre: "Consola PlayStation 5 (Edición con Lector de Discos)",
    precioNormal: 549990,
    precioOferta: 529990,
    enOferta: true,
    descripcion: "Consola estándar con lector de discos para comprar, jugar e intercambiar videojuegos en formato físico.",
    imagen: "Playstation 5 CON DISCO.jpg"
},
{
    id: 2,
    nombre: "Legend of Zelda: Ocarina of Time Remake (Cartucho Físico)",
    precioNormal: 69990,
    precioOferta: 59990,
    enOferta: true,
    descripcion: "Revive el clásico atemporal en formato de cartucho físico auténtico para colección.",
    imagen: "Legend Of Zelda Ocarina Of Time Remake.jpg"
},
{
    id: 3,
    nombre: "GTA VI Edición Coleccionista (Formato Físico ¡Con Disco!)",
    precioNormal: 89990,
    precioOferta: 79990,
    enOferta: true,
    descripcion: "Incluye el disco físico para consola, mapa de la ciudad y contenido adicional sin claves de descarga.",
    imagen: "GTA VI CON DISCO!.jpg"
}
];

export const formatearMoneda = (monto) => {
return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
}).format(monto);
};
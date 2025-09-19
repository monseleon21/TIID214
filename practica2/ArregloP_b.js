const productos = [
{nombre: "Laptop", precio: 12000},
{nombre: "mouse", precio: 250},
{nombre: "Teclado", precio: 750},
{nombre: "Monitor", precio: 3000},

 ];
console.log(nombres);

//filtro
const mayormil = productos.filter(producto => producto.precio > 1000);

// con map
const nombres = productos.map(producto => producto.nombre);
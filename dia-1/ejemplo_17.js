let productos = ["Manzana", "Pan", "Leche", "Huevos", "Queso"];
let precios = [0.50, 1.20, 0.99, 2.50, 3.00];

let precioTotal = 0;
let precioMasCaro = 0;
let precioMasBarato = precios[0];
let productoMasCaro = "";
let productoMasBarato = productos[0];

for (let i = 0; i < precios.length; i++) {
    precioTotal += precios[i];

    if (precios[i] > precioMasCaro) {
        precioMasCaro = precios[i];
        productoMasCaro = productos[i];
    }

    if (precios[i] < precioMasBarato) {
        precioMasBarato = precios[i];
        productoMasBarato = productos[i];
    }
}

console.log("Lista de Productos y Precios:");
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i] + ": $" + precios[i]);
}
console.log("Precio Total: $" + precioTotal.toFixed(2));
console.log("Producto más caro: " + productoMasCaro);
console.log("Producto más barato: " + productoMasBarato);

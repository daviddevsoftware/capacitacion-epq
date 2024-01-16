let hora = 10;
let mensaje;

if (hora < 12) {
    mensaje = "Buenos días";
} else if (hora < 18) {
    mensaje = "Buenas tardes";
} else {
    mensaje = "Buenas noches";
}

console.log(mensaje);

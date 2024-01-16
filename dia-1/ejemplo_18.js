let mensaje = "Hola Mundo";
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let alfabetoInvertido = alfabeto.split("").reverse().join("");
let mensajeCodificado = "";

for (let i = 0; i < mensaje.length; i++) {
    let caracter = mensaje[i];
    let esMayuscula = caracter === caracter.toUpperCase();
    let indice = alfabeto.indexOf(caracter.toLowerCase());

    if (indice !== -1) {
        let caracterCodificado = alfabetoInvertido[indice];
        mensajeCodificado += esMayuscula ? caracterCodificado.toUpperCase() : caracterCodificado;
    } else {
        mensajeCodificado += caracter;
    }
}

console.log("Mensaje Original: " + mensaje);
console.log("Mensaje Codificado: " + mensajeCodificado);

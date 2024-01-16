
let numeros = [15, 22, 8, 19, 31];
let maximo = numeros[0];
let minimo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
    if (numeros[i] < minimo) {
        minimo = numeros[i];
    }
}

console.log("El número máximo es " + maximo + " y el mínimo es " + minimo + ".");

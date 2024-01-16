let estudiantes = [
    { nombre: "Ana", calificaciones: [87, 76, 90] },
    { nombre: "Luis", calificaciones: [45, 60, 72] },
    { nombre: "Carlos", calificaciones: [88, 92, 95] }
];

for (let i = 0; i < estudiantes.length; i++) {
    let suma = 0;
    for (let j = 0; j < estudiantes[i].calificaciones.length; j++) {
        suma += estudiantes[i].calificaciones[j];
    }
    let promedio = suma / estudiantes[i].calificaciones.length;
    let calificacionFinal;

    if (promedio >= 90) {
        calificacionFinal = 'A';
    } else if (promedio >= 80) {
        calificacionFinal = 'B';
    } else if (promedio >= 70) {
        calificacionFinal = 'C';
    } else if (promedio >= 60) {
        calificacionFinal = 'D';
    } else {
        calificacionFinal = 'F';
    }

    console.log("Estudiante: " + estudiantes[i].nombre + ", Promedio: " + promedio + ", Calificación Final: " + calificacionFinal);
}

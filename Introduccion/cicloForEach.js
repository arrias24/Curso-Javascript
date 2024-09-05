// For each : nos permite ejecutar una funcion por cada elemento de un arreglo.


const amigos = ['Pablo', 'Victor', 'Luis'];

amigos.forEach(mostrarAmigos = (nombre,index) => console.log(`Hola! soy ${nombre} y soy el amigo #${index + 1}`));

// for in: nos permite ejecutar una funcion por cada miembro de un objeto


const persona = {
    nombre: 'Alonso',
    edad: 15,
    correo: 'correo@gmail.com'
}

for (propiedad in persona)
{
    console.log(propiedad);
}

// for of

const etiquetas = document.head.children;
console.log(etiquetas);

for (elemento of etiquetas)
{
    console.log(elemento);
}

[...etiquetas].forEach(mostrar = (elementos) => console.log(elementos));
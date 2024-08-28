const usuario = {
    nombre: 'Andres',
    edad: 27,
    amigos: ['Carlos', 'Manuel', 'Luis'],
    saludo: () => {
        console.log('Hola!');
    }
}

//Metodos propios.

usuario.saludo();

//Metodos de Javascript

const resultadoKeys = Object.keys(usuario); //devuelve los miembros del objeto.
console.log(resultadoKeys);

const resultadoValues = Object.values(usuario); //devuelve los valores de los miembros del objeto.
console.log(resultadoValues);

const resultadoEntries = Object.entries(usuario); //devuelve un arreglo con los miembros y sus valores.
console.log(resultadoEntries);
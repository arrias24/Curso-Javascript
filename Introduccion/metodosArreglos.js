const colores = ['Rojo', 'Azul', 'Amarillo'];

//METODOS

//length: Permite conocer la cantidad de elementos del arreglo.

console.log(colores.length);

//toString: Transforma los datos en texto.

console.log(colores.toString());

//join: transofrma los datos en texto y permite separarlos.

console.log(colores.join('-'));

//sort: ordena los elementos alfabeticamente o de menor a mayor segun sea el tipo de dato

const letras = ['o','e','a','u','i'];
console.log(letras.sort());

const numeros = [5,2,0,7,2];
console.log(numeros.sort());

//reverse: ordena los elementos de mayor a menor segun sea el tipo de dato

console.log(letras.reverse());

console.log(numeros.reverse());

//concat: concatena arreglos.

const arreglo_1 = [1,2,3];
const arreglo_2 = ['A','B','C'];
const arreglo_3 = arreglo_1.concat(arreglo_2);

console.log(arreglo_3);

//push: agrega elementos al final del arreglo

colores.push('Morado');
console.log(colores);

//pop: quita el ultimo elemento del arreglo

colores.pop();
colores.pop();
console.log(colores);

//shift: quita el primer elemento del arreglo y lo devuelve

const dias = ['Domingo', 'Lunes', 'Martes', 'Miercole', 'Jueves', 'Viernes', 'Sabado'];
var diaEliminado = dias.shift();
console.log(dias);

//unshift: agrega un elemento al inicio del arreglo

dias.unshift('Domingo');
console.log(dias);

/*

splice: permite insertar elementos en cualquier posicion.

1 - parametro: El lugar donde va insertar.
2 - parametro: cuantos datos va a borrar en adelante.
3 - parametro: valores a insertar.

*/

const amigos = ['Mateo', 'Lucas', 'Juan', 'Marcos'];

amigos.splice(0,0,'Roberto','Andres');
amigos.splice(3,2,'Manuel', 'Axel');
console.log(amigos);

/*

slice: permite copiar elementos de un arrgelo y asignarlos a otro.

1 - parametro: lugar de donde va a empezar a copiar.
2 - parametro: hasta donde va a llegar.

*/

const frutas = ['Fresa', 'Sandia', 'Melon', 'Manzana', 'Pera', 'Lechoza', 'Banana'];
var frutaFavorita = frutas.slice(1,4);
console.log(frutaFavorita);

//indexof: permite encontrar la posicion de un elemento en el arreglo y devuelve su posicion, en caso de no encontrarlo devuelve -1

const nombres = ['Rocio','Andres', 'Carlos', 'Nestor', 'Rocio', 'Ana', 'Castor'];
var posicion;

posicion = nombres.indexOf('Marta');
console.log('La posicion es: ',posicion);

//lastIndexOf: permite encontrar la posicion de un elemento en el arreglo recorriendo de ultimo al primero

posicion = nombres.lastIndexOf('Rocio');
console.log('La posicion es:',posicion);

//forEach: ejecuta una funcion por cada elemento del arreglo.

nombres.forEach((nombre,index) =>{
    console.log(`Hola mi nombre es ${nombre} ${index}`);
});

//find: permite utilizar funciones y retornar un valor

const resultado = nombres.find((nombre) => {
    return nombre[0] === 'A';
})

console.log(resultado);

//map: nos permite recorrer el arreglo y ejecutar funciones pero ademas podemos crear un nuevo arreglo.

const nuevoArreglo = nombres.map((nombre) => {
    return nombre.toUpperCase();
});

console.log(nuevoArreglo);

//filter: devuelve los elementos en forma de arreglo que cumplan una condicion

const nombresLimitesLetras = nombres.filter((nombre) => nombre.length <= 4);
console.log(nombresLimitesLetras);


//includes: permite concocer si dentro de el arreglo hay un valor determinado

console.log(colores.includes('Rojo'));

//every: realiza una operacion en cada elemento, devolvera true si en cada elemento retorno true

const pruebaEvery = nombres.every((nombre) => {
    if (typeof nombre === 'string')
    {
        return true;
    }
    else{
        return false;
    }
});
console.log(pruebaEvery);

//some: ejecuta una funcion en cada elemento, si alguna se ejecuta devuelve true

const musicas = ['Opera', 'Electronica', 'Salsa', 15];

const pruebaSome = musicas.some( (nombre) => {
    if (typeof nombre !== 'string')
    {
        return true;
    }
    else
    {
        return false;
    }
})
console.log(pruebaSome);
const texto = 'Habia una vez en un claro bosque magico.';

//length : devuelve la cantidad de caracteres de la cadena de texto.

console.log(`El texto tiene ${texto.length} caracteres.`);

//indexOf : devuelve la posicion del primer caracter especificado.

console.log(texto.indexOf('u'));

//lastIndexOf : devuelve la posicion del ultimo caracter especificado.

console.log(texto.lastIndexOf('i'));

/* 
    slice : devuelve un fragmento de caracteres especificados
    1 - parametro : Desde donde empieza.
    2 - parametro : Hasta donde llega.

*/

console.log(texto.slice(30));
console.log(texto.slice(0,5));

/* 
    replace : reemplaza el valor de un fragmento de texto por otro.
    1 - parametro : Desde donde empieza.
    2 - parametro: Hasta donde llega.

*/

console.log(texto.replace('claro','oscuro'));

/*
    split : transforma una cadena de texto en un arreglo.
    parametro : El caracter que separara cada elemento del arreglo.

*/

console.log(texto.split(' '));

//toLowerCase : transforma el texto a minusculas.

console.log(texto.toLowerCase());

//toUpperCase : transforma el texto a mayusculas.

console.log(texto.toUpperCase());


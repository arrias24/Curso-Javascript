//Operadores aritmeticos

let num;

num = 10 + 5;
num = 10 - 5;
num = 10 * 5;
num = 10 / 5;
num = 10 % 5;
num++;
num--;

//Operadores de asignacion

let numero = 1;

numero += 5;
numero -= 5;
numero *= 5;
numero /= 5;
numero %= 2;

//Operadores de comparacion

let resultado;

resultado = 5 == 5; 
resultado = 5 === 5;
resultado = 5 != 5;
resultado = 5 !== 5;
resultado = 5 > 10;
resultado = 5 < 10;
resultado = 5 >= 10;
resultado = 5 <= 10;
resultado = 5 > 10 ? 'el primero es menor' : 'el primero es mayor';


// Operadores logicos

const nombre = 'Andres'
const edad = 17;
let tieneEntrada = true;
const tienePermiso = true;

let permitirAcceso;

permitirAcceso = edad >= 18 && tieneEntrada ? 'Acceso concedido' : 'Acceso denegado';

permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermiso ? 'Acceso concedido' : 'Acceso denegado';

let variable = true;
console.log(!variable);




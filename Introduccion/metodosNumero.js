const numero = 10;
const numeroPI = 3.1415;
const numeroTexto = '10.78';

// toString : cambia el tipo de dato de numerico a cadena de texto.

console.log(numero.toString(), typeof numero.toString());

// toFixed : permite mostrar una cantidad de decimales a los numeros

console.log(numeroPI.toFixed(2));

// parseInt : transforma un texto a numero entero.

console.log(parseInt(numeroTexto), typeof parseInt(numeroTexto));

// parseFloat : transforma un texto a numero decimal.

console.log(parseFloat(numeroTexto), typeof parseFloat(numeroTexto));

// Math.random() : devuelve un numero al azar entre 0 y 1.

console.log(Math.random());

// Math.floor() : redondea hacia abajo un numero decimal a entero.

console.log(Math.floor(numeroPI));

// Math.ceil() : redondea hacia arriba un numero decimal a entero.

console.log(Math.ceil(numeroPI));

// Math.round() : redondea al mas cercano un numero decimal a entero.

console.log(Math.round(numeroPI));

// Ejemplo de un numero al azar con un intervalo.

const numeroAzar = Math.random();
console.log(Math.floor(numeroAzar * 100));




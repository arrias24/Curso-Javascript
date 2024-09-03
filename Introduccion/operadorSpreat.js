// spead "..." : permite anexar datos de un arreglo a un objeto o arreglo.

const frutas = ['Manzana', 'Pera', 'Uva', 'Sandia'];
const comidaFavorita = ['Pasta', 'Cordero', 'Sopa', ...frutas];

const usuario = {
    nombre: 'Andres',
    edad: 22
};

const datosLogin = {
    correo: 'andres28@gmail.com',
    clave: "2334andres",
    ...usuario
}

console.log(datosLogin);

// rest "(...)" : permite devolver argumentos adicionales en una funcion como un arreglo

const registrarUsuario = (nombre, edad, ...datosAdicionales) => {
    console.log(nombre, edad, datosAdicionales)
};

registrarUsuario('Alexander', 18, 1.89, 'Masculino');

// destructurar arreglos o objetos: permite obtener valores de un arreglo/objeto y guardarlos en una variable

const amigos = ['Pablo', 'Jose', 'Luis'];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(primerAmigo);

const persona = {
    nombre: 'Carlos',
    apellido: 'Cassanova',
    edad: 22,
    altura: 1.80
}

const {nombre,apellido,edad,altura} = persona;

console.log(nombre);

const saludo = ({nombre,edad}) =>{
    console.log(`Hola!, me llamo ${nombre} y tengo ${edad} de edad.`);
}

saludo(persona);
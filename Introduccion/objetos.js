const persona = {
    nombre: 'Andres',
    apellido: 'Arrias',
    genero: 'M',
    edad: 22,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    saludo: function () {
        alert('Saludos');
    }  
};

console.log(persona.nombre);
console.log(persona['edad']);

persona.saludo();
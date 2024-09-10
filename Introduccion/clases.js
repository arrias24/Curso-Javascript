class Usuario {
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrarDatos(){
        return `${this.nombre} ${this.apellido}`;
    }
}

const cliente = new Usuario ('Andres', 'Arrias');
console.log(cliente.mostrarDatos());
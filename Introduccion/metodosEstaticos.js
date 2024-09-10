class Usuario {
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
    
    static borrar(id){
        console.log(`El usuario ${id} ha sido borrado exitosamente`);
    }
}

Usuario.borrar(5);
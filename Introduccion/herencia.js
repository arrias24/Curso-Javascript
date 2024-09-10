class Usuario {
    constructor(user, password)
    {
        this.user = user;
        this.password = password;
    }

    getPost(){
        const posts = ['1','2'];
        return posts;
    }
}

const cliente = new Usuario ('Pablito23', 'pablin234');
console.log(cliente.getPost());

class Moderador extends Usuario{
    constructor(user, password, keys)
    {
        super(user,password);
        this.keys = keys;
    }

    deletePost(id){
        if(this.keys.includes('borrar'))
        {
            console.log(`El post con el id ${id} se ha borrado correctamente.`);
        }
        else
        {
            console.log('Ha ocurrido un error.');
        }
    }
}

const moderador = new Moderador ('Andres', 'Arrrias', ['borrar', 'agregar', 'editar']);

moderador.deletePost(7);

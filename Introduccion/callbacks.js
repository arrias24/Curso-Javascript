obtenerPostUsuario = (user, callback) => {
    console.log(`Obteniendo los post de ${user} ...`);

    setTimeout(() =>{
        let post = ['post 1','post 2','post 3'];
        callback(post);
    }
    ,2000)
}

obtenerPostUsuario('Andres', (post) =>{
    console.log(post);
});
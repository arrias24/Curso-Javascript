const saludo = (nombre) => {
    console.log(`Hola, como estas ${nombre}!`)
}

saludo('Carlos');

const operacion = (tipo,num_1, num_2) => {
    if(tipo === 'suma')
    {
        console.log(num_1 + num_2);
    }
    else if (tipo === 'resta')
    {
        console.log(num_1 - num_2);
    }
}

operacion('suma',5,8);
operacion('resta',10,10);
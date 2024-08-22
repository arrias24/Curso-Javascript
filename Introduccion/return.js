const operacion = (tipo, num_1, num_2) => {
    if (tipo === 'suma')
    {
        return (num_1 + num_2);
    }
    else if (tipo === 'resta')
    {
        return (num_1 - num_2);
    }
}

variable = operacion('suma',15,15);
console.log(variable);
const nombres = ['Alan', 'Alberto', 'Adrian','Maximus', 'Andres', 'Ambar', 'Angelina'];

for(let i = 0 ; i < nombres.length ; i++)
{
    if(nombres[i][0] != 'A')
    {
        console.log(`${nombres[i]} no comienza por la letra A`);
        break;
    }
    else
    {
        console.log(nombres[i]);
    }
}

const invitados = ['Maria', 'Gabriela', 'Alba', 'Blanca', 'Roberto'];

for (let i = 0; i < invitados.length; i++)
{
    if(invitados[i] === 'Roberto')
    {
        continue;
    }
    console.log(invitados[i]);
}
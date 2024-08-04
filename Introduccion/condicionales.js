const persona = {
    nombre: 'Andres Arrias',
    edad: 22,
    pais: 'Venezuela',
    pase: true
};

if (persona.edad >= 18)
{
    console.log(`${persona.nombre}, eres mayor de edad asi que puedes pasar.`);
}
else
{
    console.log(`${persona.nombre}, no eres mayor de edad asi que no puedes pasar.`);
}

if (persona.edad >= 18 && persona.pase == true)
{
    console.log(`${persona.nombre}, eres mayor de edad y tienes el pase asi que puedes pasar.`)
}
else
{
    console.log(`${persona.nombre}, eres mayor de edad y no tienes el pase asi que no puedes pasar.`)
}
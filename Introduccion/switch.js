const usuario = {
    nombre: 'Andres Arrias',
    edad: 22,
    pais: 'venezuela'
};

switch(usuario.pais)
{
    case 'venezuela':
        console.log(`Saquenme de Venezuela.`);
        break;
    case 'peru':
        console.log(`El cielo es marron, la gente es marron...`);
        break;
    case 'colombia':
        console.log('El cafe de Juan Valdez.')    ;
        break;
    default:
        console.log('Dato incorrecto.');
        break;    
}
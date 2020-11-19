var diego = {
    nombre: 'diego ',
    apellido: 'fernando',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8

var personas = [diego, alan, martin, dario, vicky, paula];



const pasarAlturaACentimetros = persona => {
    //Retornar un nuevo Objeto
    return {
        ...persona,
        altura: persona.altura * 100
    }
};
//PARA RETORNAR UN OBJECTO Es lo mismo de Arriba
const pasarAlturaACentimetros = persona => ({
    //Retornar un nuevo Objeto
        ...persona,
        altura: persona.altura * 100
});

// const   = persona => persona.altura *= 100; 


var personasCentimetros = personas.map(pasarAlturaACentimetros);
console.log(personasCentimetros); //personas en Centimetros Object new
console.log(personas); //Esta no se modifica
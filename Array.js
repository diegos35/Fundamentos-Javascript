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

const esAlta = persona => persona.altura > 1.8

//Es lo mismo de arriba
const esAlta = ({altura}) => altura > 1.8

var personas = [diego, alan, martin, dario, vicky, paula];

//El filter recorre el Array Personas y le pasa cada 
//una de las personas que estan dentro del array
                                    //cada una de las personas
var personasAltas = personas.filter(esAlta); 

//Es lo mismo que lo de arriba pero conuna funcion Anonima
// var personasAltas = personas.filter( function (persona) {
//     return persona.altura > 1.8
// })

console.log(personasAltas);
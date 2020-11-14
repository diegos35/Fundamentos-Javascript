var diego = {
    nombre: 'diego',
    apellido: 'caviedes',
    edad: 24,
    ingeniero: false,
    cocinero: false,
    cantante:   true,
};
//Magic Number
const Mayoria_Edad = 18;

/*function esMayorEdad(persona) {
    return persona.edad >= Mayoria_Edad //valida la edad de la persona con el numero
}*/

//1 Forma
//variable se le asigna la Funcion Anonima
// const esMayorEdad = function(persona){
//     return persona.edad >= Mayoria_Edad 
// }

//2 Forma Otra Forma ARROW FUNCTION sin () ----------
// const esMayorEdad = persona => { //Cuando hay 1 solo param se le puede quitar los parentesis ()
//     return persona.edad >= Mayoria_Edad 
// }


//3  FORMA
//esto es lo mismo que arriba Arrow Function MAS ABREVIADO SIN () Y {}
                                //ESTO ES LO QUE RETORNA
//destructuramos el Objeto que pasamos por Param
const esMayorEdad = ({ edad }) => edad >= Mayoria_Edad ; 


function imprimirSiEsMayorEdad(persona){
    if  (persona.edad > 18)  {
        //console.log(`${persona.nombre} es mayor de edad`)//Comillas invertidad para interpolar la var
        if (esMayorEdad(persona)) {
            console.log(`${persona.nombre} es mayor de edad`)//Comillas invertidad para interpolar la var
        }
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}
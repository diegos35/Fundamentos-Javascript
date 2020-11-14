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

function esMayorEdad(persona) {
    return persona.edad >= Mayoria_Edad //valida la edad de la persona con el numero
}
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
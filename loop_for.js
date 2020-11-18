var diego = {
    nombre: 'diego',
    apellido: 'caviedes',
    edad: 24,
    peso: 75,
};

console.log(`Al inicio del año ${diego.nombre} pesa ${diego.peso.toFixed(2)}Kg`)

// function aumentarPeso (persona){
//     return persona.peso += 200

// }
const INCREMENTO_PESO = 200;
const DIAS_DEL_AÑO = 365;

const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
//ARROW FUNCTION                    //Implicitamente retrona esto
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;

for (var i = 0; i<= DIAS_DEL_AÑO; i++) {
    var random = Math.random();
    
    if (random < 0.25){
        aumentarPeso(diego);
    } else if (random < 0.5) {
        adelgazar(diego);
    }
}


console.log(`Al final del año ${diego.nombre} pesa ${diego.peso.toFixed(2)}Kg`)
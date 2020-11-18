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
const comeMucho = () => Math.random() < 0.3;//no recibe ningun parametro
const realizaDeporte = () => Math.random() < 0.4;


const META = diego.peso - 3 ;
var dias = 0;
console.log(META);

while (diego.peso > META) {
    debugger
    if (comeMucho()) {
        aumentarPeso(diego);
    }
    if (realizaDeporte()) {
        adelgazar(diego);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} días hasta que ${diego.nombre} adelgazo 3kg`);

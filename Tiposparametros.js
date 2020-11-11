var diego =  {
    nombre: 'Diego',
    apellido: 'Caviedes',
    edad: 24
}

var dario =  {
    nombre: 'dario',
    apellido: 'gomez',
    edad: 24
}

/****************** PARAMETRO POR REFERENCIA************* */

/**AFECTA EL VALOR DE EDAD EN EL OBJECTO*/
function cumpleanosReferencia(persona) {
    persona.edad += 1;
}


/****************** PARAMETRO POR VALOR**************
 * ***/
//NO AFECTA EL OBJECTO Se CREA OTRO OBJECTO
function cumpleanosValor(persona) {
    return {
        ...persona, //“…” se llama operador de propagación (Spread operator
        edad: persona.edad + 1
    }
}




/**NO AFECTA EL VALOR DE EDAD */
function cumpleanosValorDos(edad) {
    edad += 1;
}

//var  diegoMasviejo = new cumpleanosAfecta(diego);


/**Cuando los objetos se pasan como una referencia, 
 * estos se modifican fuera de la función */
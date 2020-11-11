//var nombre = 'Diego';

var diego =  {
    nombre: 'Diego',
    apellido: 'Caviedes',
    edad: 24

}


var dario =  {
    nombre: 'Dario',
    apellido: 'Gomez',
    edad: 24

}

//#Example 1
//Pasar un atributo de un objeto
function imprimirNombreMayuscula({apellido}){ //{atributo del objeto} 
    nombre = apellido.toUpperCase();
    console.log(apellido);
}

imprimirNombreMayuscula(diego);
imprimirNombreMayuscula(dario);


//#Example2

//Pasar un atributo de un objeto
function imprimirNombreMayusculaDos(persona){ //{atributo del objeto} 
    
    //var nombre = persona.nombre.//esto es lo mismo de abajo
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreMayusculaDos(diego);
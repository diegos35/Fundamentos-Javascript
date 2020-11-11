var nombre = 'Diego'; //declaracion y asignacion
var apellido = "Caviedes";

var nombreMayusculas = nombre.toUpperCase(); 
var apellidoMiniscula = apellido.toLowerCase();
var primeraLetraNombre = nombre.charAt(0);
var cantidadDeLetrasNombre = nombre.length;  

//***CONCATENACIÓN */

var nombreCompleto = nombre + ' ' + apellido;

//Interpolacion de texto ///////Dentro las llaves `{ }` podemos colocar codigo Javascript
var nombreCompletoInterpolacion = `${nombre} ${apellido.toUpperCase() }`; 

// console.log(`Hola ${nombre} ${apellido}`);
//console.log('Hola' +nombre + apellido);

var str = nombre.substr(1,2);  
//var str = nombre.charAt(1) + nombre.charAt(2); 
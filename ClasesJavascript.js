//Constructor
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

//prototipo mismos métodos
Persona.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
    debugger
    return this.altura > 1.8;
}

var diego = new Persona('Diego', 'cavides',1.82)
var michel = new Persona('michel', 'rojas',1.64)
var emma = new Persona('emma', 'cavides', 1.24)


diego.saludar(); 
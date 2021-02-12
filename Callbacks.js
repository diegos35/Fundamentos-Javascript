const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1 )}` //se remplaza la palabra :id por el id 1
const opts = {crossDomain: true}  


//callback
onResponse = function({result}){//hace la peticion
    //console.log(result)
    console.log(`Hola yo soy ${result.properties.name}`)
}

function obtnerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id )}`
    $.get(url, opts, onResponse) 
}

obtnerPersonaje(1)
obtnerPersonaje(2)
obtnerPersonaje(3)
//$.get(lukeUrl, opts, onResponse) 


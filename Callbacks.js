const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
console.log(PEOPLE_URL);
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1 )}` //se remplaza la palabra :id por el id 1
const opts = {crossDomain: true}  


//callback
onResponse = function({result}){//hace la peticion
    console.log(result)
    console.log(`Hola yo soy ${result.properties.name}`)
}

$.get(lukeUrl, opts, onResponse) 


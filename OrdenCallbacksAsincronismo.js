const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}  


function obtnerPersonaje (id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $.get(url, opts, function(data) {
        resolve(data)
        })
       .fail(() => reject(id))
  });
}

function onError(id) {
    console.log(`sucedio un error al obterner personaje ${id}`)
}

obtnerPersonaje(1)
    .then( personaje1 => { //arrow function
        console.log(`el persona 1 es ${personaje1.result.properties.name}`)
        return obtnerPersonaje(2)
    })
    .then( personaje2 => {
      console.log(`el persona 2 es ${personaje2.result.properties.name}`)
      return obtnerPersonaje(3)
    })
    .then( personaje3 => {
      console.log(`el persona 3 es ${personaje3.result.properties.name}`)
      return obtnerPersonaje(5)
    })
    .then( personaje4 => {
      console.log(`el persona 4 es ${personaje4.result.properties.name}`)
      return obtnerPersonaje(5)
    })
    .then( personaje4 => {
      console.log(`el persona 5 es ${personaje4.result.properties.name}`)
      return obtnerPersonaje(6)
    })
    .catch(onError)
    
    /**
     .then(function (result) { 
        console.log(`el persona 1 es ${result.properties.name}`)
    })
     */
    // .catch(function (id) {
    //     onError(id)
    // } )



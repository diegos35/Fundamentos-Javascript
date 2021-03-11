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
    .then(function (result) { 
        console.log(`el persona 1 es ${result.properties.name}`)
    })
    .catch(onError)

    // .catch(function (id) {
    //     onError(id)
    // } )



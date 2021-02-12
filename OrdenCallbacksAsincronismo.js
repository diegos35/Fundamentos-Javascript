const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}  


function obtnerPersonaje(id, callback){
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id )}`
    $.get(url, opts, function({result}){
        console.log(`Hola yo soy ${result.properties.name}`)
    })
    if(callback){ //llamamos al callback que es la funcion anonima
    callback()
    } 
}


obtnerPersonaje(1, function() { 
    obtnerPersonaje(2, function(){
        obtnerPersonaje(3, function() {
            obtnerPersonaje(4, function(){
                obtnerPersonaje(5, function () {
                    obtnerPersonaje(6, function () {
                        obtnerPersonaje(7)
                    })
                })
            })
        })        
    })
})
//obtnerPersonaje(2)
//obtnerPersonaje(3)


const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}  


function obtnerPersonaje(id, callback){
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id )}`
    
    $
    .get(url, opts, callback)
    .fail(function () {
        console.log('sucedio un error no se pudo obtner el personaje ${id}')
    })
    /**como Arrow Funtion */
    // $
    // .get(url, opts, callback)
    // .fail(() => {
    //     console.log('sucedio un error no se pudo obtner el personaje ${id}')
    // })
}



/**
 * le pasamos 2 parametro el id que quermos obtener
 * y el Callback
*/

obtnerPersonaje(1, function({result}) { 

    console.log(`Hola yo soy ${result.properties.name}`);

    obtnerPersonaje(2, function(){
        console.log(`Hola yo soy ${result.properties.name}`);

        obtnerPersonaje(3, function() {
            console.log(`Hola yo soy ${result.properties.name}`);

            obtnerPersonaje(4, function(){
                console.log(`Hola yo soy ${result.properties.name}`);
                
                obtnerPersonaje(5, function () {
                    console.log(`Hola yo soy ${result.properties.name}`);

                    obtnerPersonaje(6, function () {
                        console.log(`Hola yo soy ${result.properties.name}`);
                        
                        obtnerPersonaje(7, function () {
                            console.log(`Hola yo soy ${result.properties.name}`);
                        })
                    })
                })
            })
        })        
    })
})
//obtnerPersonaje(2)
//obtnerPersonaje(3)


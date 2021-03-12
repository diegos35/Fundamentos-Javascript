const API_URL = 'https://www.swapi.tech/api/' 
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}  


function obtnerPersonaje (id) {

   //cracion de la promesa
   return new Promise((resolve, reject) => {
    
      const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
         $
            .get(url, opts, function(data) {
            //console.log(data)
            resolve(data) //cuando se resuelve Fullfilled
            })
            .fail(() => reject(id)) //cuando es Reject
  });

}

/**Función de error */
function onError(id) {
  console.log(`sucedio un error al obterner personaje ${id}`)
}

//colocamos el async antes de la función
async function obtenerPersonases() {
   var ids = [1,2,3,4,5,6,7] //ids de los personajes
   var promesas = ids.map( id =>  obtnerPersonaje(id) ) //mapea las promesas en un array
   
   try {
      var personajes = await Promise.allSettled(promesas) //se detiene hasta que todas las promesas sean resueltas y se guarda en la variable
      console.log(personajes) //se resuelven todas las promesas al mismo tiempo 
   } catch (id) {

      onError(id)
   }

   /*
   Promise
   .all(promesas) //le pasamos el parámetro
   //.allSettled(promesas) //pasamos el array de promesas metodo me devuelve un array de las promesas Resolve y Reject
   .then( personajes => console.log(personajes) )
   .catch(onError)
   */


}

obtenerPersonases()


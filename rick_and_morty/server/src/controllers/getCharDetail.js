const axios = require( 'axios' );


const getCharDetail = ( response , id ) => {
    axios( `https://rickandmortyapi.com/api/character/${ id }` )
    .then( result => result.data )
    .then( data => { 
        let char = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name
        }
        response.writeHead( 200 , { "Content.Type": "application/json" } )
        .end( JSON.stringify( character ) )
    })
    .catch( err => response( 500, { "Content.Type": "text/plain" }  ) )
    .end( `El personaje con el id: ${ id } no fue encontrado`)
}

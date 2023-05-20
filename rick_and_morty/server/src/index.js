const app = require( "./app" );
const { conn } = require( "./db" );

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
   console.log( `Server raised in port: http://localhost:${ PORT }` );
   console.log( "::::", conn.models );
   await conn.sync( { force: true } )
});

































// const http = require( "http" );
// const { getCharById } = require("./controllers/getCharById");
// // const getCharDetail = require("./controllers/getCharDetail");

// http.createServer( ( request, response ) => {
//     response.setHeader( "Access-Control-Allow-Origin", "*" );
//     //  /rickandmorty/character/:id   /rickandmorty/characters
//     // const url = request.url.split("/");
//     // const param1 = url[1];
//     // const param2 = url[2];
//     // const id = url[3];
//     // // console.log( url );
//     // if( param1 === "rickandmorty" && param2 === "characters" ){

//         if( request.url.includes( '/rickandmorty/character' ) ){
//             const id = request.url.split('/').at(-1);
//         getCharById( response , id )
//     }

//     // if( request.url.includes( 'detail' ) ){
//     //     getCharDetail( response , id )
//     // }

//     // //  /rickandmorty/characters
//     //     response.writeHead( 200 , { "Content-type": "application/json" } );
//     //     response.end( JSON.stringify( characters ) );
//     // }
//     // if( param1 === "rickandmorty" && param2 === "character" ){
//     // //  /rickandmorty/character/:id      // 1 al 20
//     //     const character = characters.find( ( ch ) => {
//     //         return ch.id === Number(id)
//     //     })
//     //     if( character )
//     //     return response
//     //             .writeHead( 200 , { "Content-type": "application/json" } )
//     //             .end( JSON.stringify( character ) );
//     // }

//     // return response.writeHead( 404 , { "Content-type": "text/plain" } ).end( "Not Found" );

// } ).listen( 3001, console.log("port on 3001") );
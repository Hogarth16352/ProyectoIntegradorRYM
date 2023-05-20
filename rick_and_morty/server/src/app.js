const express = require('express');
const app = express();
const logger = require( "morgan" )

const routes = require("./routes/index")

app.use( express.json() )

const urlencoded = express.urlencoded( { extended: false } )

app.use( ( request, response, next ) => {
    response.header( 'Access-Control-Allow-Origin', 'http://localhost:3000' );//
    response.header( 'Access-Control-Allow-Credentials', true );
    response.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use( logger( "dev" ) );

app.use( "/rickandmorty", routes );

app.get( "/", ( request, response ) => {
    response.status( 200 ).json( { message: "in first server in EXPRESS", app: "BUCARAMANGA" } )
} );

module.exports = app;
require( 'dotenv' ).config()//process.env
const { User } = require( "../db" );

const DB_EMAIL = process.env.EMAIL
const DB_PASSWORD = process.env.PASSWORD

const STATUS_OK = 200
const STATUS_ERROR = 400

const login = ( request, response ) => {
    // const { id } = req.params// pendiente
    const { password, email } = request.query;

    try {
        if( !password || !email ){
            return response.status( 500 ).json( { message: "There isn't a password or email" } );
        }
        if( password === DB_PASSWORD && email === DB_EMAIL ){
            response.status( STATUS_OK ).json( { access: true } )
        }else{
            response.status( STATUS_ERROR ).json( { access: false } )
        }
    } catch (error) {
        response.status( STATUS_ERROR ).json( { access: false } )
    }
}

const register = async ( request, response ) => {
    const { password, email, id } = request.query;

    try {
        if( !password || !email ){
            return response.status( 500 ).json( { message: "There isn't a password or email" } );
        }
        if( password === DB_PASSWORD && email === DB_EMAIL ){
            const user = await User.create( { password, email, id } )            
            response.status( STATUS_OK ).json( user )
        }else{
            response.status( STATUS_ERROR ).json( { message: "password incorrecto" } )
        }
    } catch (error) {
        response.status( STATUS_ERROR ).json( error )
    }
}


module.exports = {
    login,
    register
}
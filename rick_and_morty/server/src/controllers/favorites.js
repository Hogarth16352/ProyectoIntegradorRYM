const axios = require( 'axios' );

require( 'dotenv' ).config()//process.env

const { User, Favorite } = require( "../db" );

const STATUS_OK = 200
const STATUS_ERROR = 400

// let myFavorites = [];

const postFav = async ( request , response ) => {
    const { id, name, status, species, gender, origin, image, location, userId } = request.body;
    try {
        if( !id || !name || !status || !species || !gender || !origin || !image ){
            return response
                .status( STATUS_ERROR )
                .json( { message: "The require information is missing" } )
        }
        const character = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
            location
        };
        // console.log( character );
        const char = await Favorite.create( character )
        if( userId ){
            const user = await User.findByPk( userId );
            if(user){
                await user.addFavorite( char );
                //await char.addUser( user )
            }   
        }

        response.status( STATUS_OK ).json( char );
    }catch (error){
        response.status( STATUS_ERROR ).json( { message: error} )
    }
        
}


const deleteFav= async ( request , response ) => {
    const { id } =  request.params;
    try{
        if( !id ){
            return response.status( STATUS_ERROR ).json( { message: "id not found" } )
        }
        const char = await Favorite.findByPk( id )
        if( char ){
            await Favorite.destroy({
                where: {
                    id
                }
            })
            response.status( STATUS_OK ).json( char );
        }
    }catch ( error ){
        response.status( STATUS_ERROR ).json( { message: error} )
    }


}

module.exports = {
    postFav,
    deleteFav
}
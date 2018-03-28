const { MongoClient, ObjectID } = require( "mongodb" );

const obj = new ObjectID();
console.log( "OBJ", obj ); 

MongoClient
    .connect( 'mongodb://localhost:27017/TodoApp', ( error, client ) => {
        if ( error ) {
            return console.log( "ERROR CONNECTING TO DB", error );
        }

        const db = client.db( 'TodoApp' );

        // DB Collection takes string of collection name


        // db
        //     .collection( 'Users' )
        //     .insertOne( {
        //         name: "Sam",
        //         age: 22,
        //         location: "Manchester",
        //     }, ( err, res ) => {
        //         if ( err ) {
        //             console.log( "Could not insert new user: ", err );
        //         }
        //
        //         console.log( "RESULT: ", JSON.stringify( res.ops[ 0 ]._id.getTimestamp(), undefined, 2 ) );
        //     } );

        console.log( "SUCCESSFULLY CONNECTED" );

        client.close();
    } );
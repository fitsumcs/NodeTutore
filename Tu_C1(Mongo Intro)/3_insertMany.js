// CRUD on Mongo DB

// Require mongodb native driver
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// Db info 
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'users-info';

// connecting to db in Async
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to DB");
    }
    console.log('Databse Connected......');

    const db = client.db(dbName);

    // create collection and insert one value 
    db.collection('users').insertMany([{
            name: "Marke",
            age: 25
        },
        {
            name: "Math",
            age: 43
        },
        {
            name: "Gunter 2",
            age: 27
        }

    ], (err, result) => {
        if (err) {
            console.log("Data Not Encoded...");
        }

        console.log(`Result Inserted : ${result.insertedCount}`);

    });





});
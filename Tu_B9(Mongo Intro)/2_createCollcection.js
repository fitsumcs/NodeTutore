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
    db.collection('users').insertOne({
        name: "Abebe",
        age: 31
    });





});
// CRUD on Mongo DB
// other module
const chalk = require('chalk');
// Require mongodb native driver
const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require("mongodb");


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

    // fetch mulitple data
    //find returns curser object that point to the data
    db.collection('users').find({ age: 27 }).toArray((err, data) => {

        console.log(data);
    });
    db.collection('users').find({ age: 27 }).count((err, count) => {

        console.log(`Ther are ${count} match`);
    });





});
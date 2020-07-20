// CRUD on Mongo DB
// other module
const chalk = require('chalk');
// Require mongodb native driver
const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require("mongodb");
const { result } = require('underscore');


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

    // update one 
    db.collection('users').updateOne({ _id: new ObjectId('5f15b22f50f6cf02aad14e00') }, {
        $set: {
            name: "Gunter"
        }
    }).
    then((result) => { console.log(result.modifiedCount); });






});
// CRUD on Mongo DB
// other module
const chalk = require('chalk');
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

    // fetch single data
    db.collection('users').findOne({ name: "Abebe" }, (err, user) => {

        if (err) {
            return console.log("Cant Find the User");
        }
        console.log("User Info ");
        console.log(chalk.red("Id : ") + user._id);
        console.log(chalk.red("Name : ") + user.name);
        console.log(chalk.red("Age : ") + user.age);
    });



});
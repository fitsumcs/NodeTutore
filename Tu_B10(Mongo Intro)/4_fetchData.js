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

    // fetch single data
    db.collection('users').findOne({ name: "Abebe" }, (err, user) => {

        if (err) {
            return console.log("Unable to fetch");
        }
        if (user === null) {
            return console.log(chalk.red("User Not Found"));
        }
        console.log(chalk.green.bold.inverse("User Info "));
        console.log(chalk.red("Id : ") + user._id);
        console.log(chalk.red("Name : ") + user.name);
        console.log(chalk.red("Age : ") + user.age);
    });
    // fetch single data by Id
    db.collection('users').findOne({ _id: new ObjectId("5f15b0c16898a801a9f2c0d8") }, (err, user) => {

        if (err) {
            return console.log("Unable to fetch");
        }
        if (user === null) {
            return console.log(chalk.red("User Not Found"));
        }
        console.log(chalk.green.bold.inverse("User Info "));
        console.log(chalk.red("Id : ") + user._id);
        console.log(chalk.red("Name : ") + user.name);
        console.log(chalk.red("Age : ") + user.age);
    });



});
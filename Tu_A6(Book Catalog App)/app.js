// req
const yargs = require('yargs');

const bookMethods = require('./util/books');


// custome yargs version
yargs.version('1.1.0');

// setting commands 

//  Adding New Book 
yargs.command({
    command: 'add',
    describe: 'Add New Book',
    builder: {
        title: {
            describe: 'Title of the Book',
            demandOption: true,
            type: 'string'
        },
        author: {
            describe: 'Author of the Book',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        bookMethods.addBook(argv.title, argv.author);

    }
});

// Remove new Book
yargs.command({
    command: 'remove',
    describe: 'remove New Book',

    builder: {
        title: {
            describe: 'Title of the Book',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {

        bookMethods.removeBook(argv.title);
    }
});




// Display all books 
yargs.command({
    command: 'display',
    describe: 'View All Available Books',
    handler() {
        bookMethods.displayAllBooks();
    }
});

// view single book
yargs.command({
    command: 'view',
    describe: 'view a Single Book',
    handler() {
        console.log("View Single Book");
    }
});

yargs.parse();

// console.log(yargs.argv);
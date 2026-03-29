// req
const yargs = require('yargs');

const bookMethods = require('./util/books');

const cli = yargs(process.argv.slice(2));

// custome yargs version
cli.version('1.1.0');

// setting commands 

//  Adding New Book 
cli.command({
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
cli.command({
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
cli.command({
    command: 'display',
    describe: 'View All Available Books',
    handler() {
        bookMethods.displayAllBooks();
    }
});

// view single book
cli.command({
    command: 'view',
    describe: 'view a Single Book',
    handler() {
        console.log("View Single Book");
    }
});

cli.parse();

// console.log(cli.argv);
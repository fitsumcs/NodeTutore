// req
const yargs = require('yargs');
const { argv } = require('yargs');

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
            demandOption: true
        },
        author: {
            describe: 'Author of the Book',
            demandOption: true
        }
    },
    handler(argv) {
        console.log("Adding New Book", argv);
    }
});

// Remove new Book
yargs.command({
    command: 'remove',
    describe: 'remove New Book',
    handler() {
        console.log("Remove New Book");
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

// Display all books 
yargs.command({
    command: 'all',
    describe: 'View All Available Books',
    handler() {
        console.log("View all Books");
    }
});

console.log(yargs.argv);
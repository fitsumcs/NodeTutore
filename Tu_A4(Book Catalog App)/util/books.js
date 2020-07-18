//req
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function addBook(title, author) {

    if (title === '' || author === '') {
        return console.log(chalk.inverse.red("Please Provide Book Title and Author"));
    }
    const book = loadBooks();
    const duplicate = book.find((data) => {

        return data.title === title;
    });

    if (duplicate) {
        return console.log(chalk.inverse.red("Book Already Registered..."));
    }
    book.push({ title, author });
    saveBook(book);
    console.log(chalk.inverse.green("Book Added Successfully"));
}



// load Books
function loadBooks() {
    try {
        const bufferF = fs.readFileSync(path.join(__dirname, 'books.json'));
        const data = bufferF.toString();
        return JSON.parse(data);
    } catch (error) {
        return [];

    }

}
// save book
function saveBook(book) {
    fs.writeFileSync(path.join(__dirname, 'books.json'), JSON.stringify(book));

}

module.exports = { addBook };
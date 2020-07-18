//req
const fs = require('fs');
const path = require('path');

function addNotes(title, author) {
    const notes = loadNotes();
    notes.push({ title, author });
    saveNote(notes);
    // console.log("Book Name :   ", title);
    // console.log("Book Author : ", author);



}



// load Notes 
function loadNotes() {
    try {
        const bufferF = fs.readFileSync(path.join(__dirname, 'notes.json'));
        const data = bufferF.toString();
        return JSON.parse(data);
    } catch (error) {
        return [];

    }

}
// save data 
function saveNote(notes) {
    fs.writeFileSync(path.join(__dirname, 'notes.json'), JSON.stringify(notes));

}

module.exports = { addNotes }
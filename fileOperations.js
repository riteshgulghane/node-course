const fs = require("fs");

let addNote = (note, file = 'datafile.txt') => {
    fs.appendFileSync(file, note + '\n')
    console.log('note added successfully!!');
}

let removeNote = (note, file = 'datafile.txt') => {
    fs.appendFileSync(file, note + '\n')
    console.log('note added successfully!!');
}

let getNotes = (file = 'datafile.txt') => {
    return fs.readFileSync(file, 'utf8').split('\n');
}

module.exports = {
    addNote,
    removeNote,
    getNotes
};
const fileOperations = require('./fileOperations');

module.exports = class NotesHandler {
    #notes = [];

    constructor(){
        this.#notes = fileOperations.getNotes().filter(note => note !== '').map(note => JSON.parse(note));
    }

    getNotes() {
        return this.#notes;
    }

    setNotes(count) {
        this.#notes = count;
    }

    getNoteNumber() {
        return this.#notes.length;
    }
    
}

// module.exports = NotesHandler;
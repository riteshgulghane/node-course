const yargs = require("yargs");
const fileOperations = require('./fileOperations');
const NotesHandler = require('./notesHandler');

let notesHandler = new NotesHandler();

yargs.command({
    command: 'add',
    describe: "adding",
    handler: function(arg) {
        console.log('args - ', arg);

        let note = {
            id: notesHandler.getNoteNumber(),
            note: arg._[1],
            timeStamps: Date.now()
        }
        console.log('note - ', note);

        fileOperations.addNote(JSON.stringify(note))
    }
})

yargs.command({
    command: 'remove',
    describe: "Removing the note",
    handler: function(arg) {
        console.log('remove a old note', arg);
    }
})

yargs.command({
    command: 'get',
    describe: "get the note",
    handler: function(arg) {
        console.log('my notes', notesHandler.getNotes());
    }
})

console.log('yargs - ', yargs.argv);


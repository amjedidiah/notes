
const argvTitle = {
  describe: "Title of note",
  demand: true,
  alias: "t"
}

const fs = require('fs'),
      _ = require('lodash'),
      notes = require('./notes.js'),
      yargs = require('yargs')
      argv = yargs
      .command("add", "Add a new note", {
        title: argvTitle,
        body: {
          describe: "Body of note",
          demand: true,
          alias: "b"
        }
      })
      .command("list", "List all notes")
      .command("read", "Read a note", {
        title: argvTitle,
      })
      .command("remove", "Remove a note", {
        title: argvTitle,
      })
      .help()
      .argv

let command = argv._[0],
    {title, body} = argv


switch (command) {
  case 'add':
  notes.addNote(title,body)
    break;
  case 'list':
  notes.getAll()
    break;
  case 'read':
  notes.readNote(title)
    break;
  case 'remove':
  notes.removeNote(title)
    break;
  default:
    console.log(command)
}

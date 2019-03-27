const fs = require('fs')

const fetchNotes = () => {
  let notes = []
  try  {
    notes = JSON.parse(fs.readFileSync('notes-data.json'))
  } catch (e) {

  }
  return notes
}

const saveNotes = (notes, title, action) => {
  fs.writeFile('notes-data.json', JSON.stringify(notes), (err) => {
    if(err) {
      console.log('Unable to add note',title)
    } else {
      console.log(title, action, 'successfully')
    }
  })
}

const addNote = (title, body) => {

  let notes = fetchNotes(),
        note = {
          title,
          body
        }

  let duplicateNotes = notes.filter((note) => note.title === title) //check for duplicate notes

  if(duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes, title, 'added')
  } else {
    console.log(title, 'already exists')
  }


}

const getAll = () => {
  console.log(fetchNotes())
}

const readNote = (title) => {
  let notes = fetchNotes()
  let note = notes.filter((note) => note.title === title) //get note

  if(note.length > 0) {
    console.log(note[0])
  } else {
    console.log(title,'not found')
  }
}

const removeNote = (title) => {
  let notes = fetchNotes()
  let filteredNotes = notes.filter((note) => note.title !== title) //check for duplicate notes
  if(filteredNotes.length < notes.length) {
    saveNotes(filteredNotes, title, 'removed')
  } else {
    console.log(title, 'was not found')
  }
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}

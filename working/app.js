console.log('Starting app')

const os = require('os'),
      user = os.userInfo(),
      notes = require('./notes.js')

console.log(notes.fileAppender('greetings.txt', `Hello ${user.username}`))

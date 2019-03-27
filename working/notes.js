const fs = require('fs')

module.exports.fileAppender = (fileName, text) => {

  fs.appendFile(fileName, text, (err) => {
    if(err) {
      return 'Unable to write to file'
    } else {
      return 'Writing successful'
    }
  })
  //This function allows feedback for success & failure

  // fs.appendFileSync('greetings.txt', 'Hello world')
  //This function doesn't allows feedback for success & failure
}

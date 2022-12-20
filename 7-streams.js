const fs = require('fs')

// Readable Streams
// For a short file
let shortReadableStream = fs.createReadStream(__dirname + '/input.txt')
shortReadableStream.on('data', (chunk) => {
  console.log(chunk)
  console.log(chunk.toString())
})

// For a big file
let data = ''
let bigReadableStream = fs.createReadStream(__dirname + '/input.txt')
bigReadableStream.setEncoding('UTF8')
bigReadableStream.on('data', (chunk) => {
  // chunk is a buffer
  data += chunk
})

bigReadableStream.on('end', () => {
    console.log(data)
})

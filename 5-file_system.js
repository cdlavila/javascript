const fs = require('fs');

function read(ruta) {
    fs.readFile(ruta, (error, data) => {
        console.log(data.toString())
        return (data.toString())
    })
    return ''
}

function write(ruta, data, callback) {
    fs.writeFile(ruta, data, (error, data) => {
        if (error) {
            callback('I have not been able to write it correctly')
        } else{
            callback('I have written it correctly')
        }
    })
}

function remove(ruta, callback) {
    fs.unlink(ruta, () => {
        console.log('File removed correctly')
    })
}

write(__dirname + '/file.txt', 'Soy un file más viejo', console.log)

// const data = read(__dirname + '/file.txt')
// console.log(data)
//
// remove(__dirname + '/file.txt', console.log);

// Resolve when the process was finished successfully and reject when the process was finished with an error

function sayHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello ' + name)
            resolve(name)
        }, 1500)
    })
}

function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla bla')
            resolve('Bla bla bla bla bla')
        }, 1500)
    })
}

function sayGoodBay(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + name)
            resolve(name)
        }, 1500)
    })
}

console.log('Starting process')
sayHello('Carlos')
    .then(talk)
    .then(talk)
    .then(sayGoodBay)
    .then(() => {
        console.log('Process  finished')
    })
    .catch(error => {
        console.log(error)
    })

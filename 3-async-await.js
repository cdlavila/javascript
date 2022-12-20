async function sayHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello ' + name)
            resolve(name)
        }, 1500)
    })
}

async function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla bla')
            resolve('Bla bla bla bla bla')
        }, 1500)
    })
}

async function sayGoodBay(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + name)
            resolve(name)
        }, 1500)
    })
}

async function main() {
    console.log('Starting process')
    await sayHello('Carlos')
    await talk()
    await talk()
    await sayGoodBay('Carlos')
    console.log('Process finished')
}

main()

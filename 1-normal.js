function sayHello(name) {
  setTimeout(() => {
    console.log('Hello ' + name)
  }, 1500)
}

function talk() {
  setTimeout(() => {
    console.log('Bla bla bla bla bla')
  }, 1500)
}

function sayGoodBay(name) {
  setTimeout(() => {
    console.log('Adios ' + name)
  }, 1500)
}

function main() {
  console.log('Starting process')
  sayHello('Carlos')
  talk()
  talk()
  sayGoodBay('Carlos')
  console.log('Process finished')
}

main()

/// Use of "console.log" and "window.prompt"
console.log("Hello world from console from a different js file")
// var nameA = window.prompt("Nombre:")
var nameA = "HD"
console.log(`Hello ${nameA} !`)
var a = null
console.log(a)
var b = undefined == null
console.log(b)

/// Use of : var, let, const
var title = `Code life`
let publisher = `House of books`
publisher = `House of cards`
const author = `Heberth Deza`
//author = `HD`
console.log(`Title = ${title} ,  Publicher = ${publisher} , Author = ${author}`)

/// Dynamic type
var valor1 = `Juan`
console.log(`1. ${valor1}`)
valor1  = 45
console.log(`2. ${valor1}`)

/// Symbol
var sim = Symbol(`NodeJS`) 
console.log(sim)
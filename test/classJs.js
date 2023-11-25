class Person {
    name
    surname
    address

    constructor(name, surname, address) {
        this.name = name
        this.surname = surname
        this.address = address
    }

    get name() {
        return this.name + `!`
    }

    set name(newName) {
        this.name = newName
    }

    sayHello() {
        console.log(`Hello ${this.name}!`)
    }
}

let objPerson = {
    name : `Heberth`, // key : value
    surname : `Deza`, // key : value
    address : {
        department : `La Libertad`, // key : value
        city : `Guadalupe`, // key : value
    }

}

let p1 = new Person();
let p2 = new Person(`Heberth`, `Deza`, `Guadalupe`);
p2.sayHello()
console.log(p1)
console.log(objPerson)
console.log(objPerson.surname)

objPerson.address.zip = 1234
console.log(objPerson)

delete objPerson.address.zip
console.log(objPerson)

function greetings() {
    console.log(`Greetings !!!`)
}

greetings()
greetings.description = `My name is greetings`
console.log(greetings)


function otherFun(funAux) {
    console.log(`otherFun`)
    funAux()
}

otherFun(greetings)

let myFunc = function() {
    console.log(`myFunc`)
}

myFunc()

var aux1 = 10

console.log(`\n`)
for(let key in p1) {
    console.log(key)
}

console.log(p2.name)

console.log(Object.keys(p2))
console.log(Object.values(p2))
console.log(Object.entries(p2))



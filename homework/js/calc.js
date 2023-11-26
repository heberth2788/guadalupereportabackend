const prompt = require('prompt-sync')();

function add(... args) {
    let result = 0;
    for(const arg of args) {
        result += arg;
    }
    return result;
}

function sub(... args){
    let result = 0;
    for(const arg of args) {
        if(result == 0)
            result = arg;
        else    
            result -= arg;
    }
    return result;
}

function mul(... args) {
    let result = 0;
    for(const arg of args) {
        result *= arg;
    }
    return result;
}

function div(... args) {
    let result = 0;
    for(const arg of args) {
        if(result == 0)
            result = arg;
        else    
            result /= arg;
    }
    return result;
}

function exp(... args) {
    let result = 0;
    for(const arg of args) {
        if(result == 0)
            result = arg;
        else    
            result **= arg;
    }
    return result;
}

let op1 = Number(prompt(`op1 = `));
let op2 = Number(prompt(`op2 = `));
let op = prompt(`+, -, *, /, ** = `);

let res = 0;

if(op == `+`)
    res = add(op1, op2);
else if(op == `-`) 
    res = sub(op1, op2);
else if(op == `*`) 
    res = mul(op1, op2);
else if(op == `/`) 
    res = div(op1, op2);
else if(op == `**`) 
    res = exp(op1, op2);
else 
    console.log(`operation not supported`)

console.log(`Result = ${res}`)

//console.log(`${op1} and ${op2}`)
//let rpta = add(1, 2, 3, 4, 5);
//console.log(rpta);

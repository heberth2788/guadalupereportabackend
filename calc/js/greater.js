function findLargest(... args) {
    console.log(`original: ${args}`);
    let argsAux = args.map(pivot => parseInt(pivot)).sort((a, b) => a - b); // Value number order
    //let argsAux = args.map(pivot => parseInt(pivot)).sort(); // Ascii character order
    console.log(`  sorted: ${argsAux}`);
    return argsAux[argsAux.length - 1];
}

let largest = findLargest(4, 99, 5, 20, 56, 3);
console.log(`The largest = ${largest}`);



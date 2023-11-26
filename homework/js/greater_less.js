class TwoDifferentNumbers {
    largest;
    smallest;

    constructor(largest, smallest) {
        this.largest = largest;
        this.smallest = smallest;
    }
}
// largest smallest
function fetchGreaterLess(... args) {
    console.log(`original: ${args}`);
    let argsAux = args.map(pivot => parseFloat(pivot)).sort((a, b) => a - b); // Value number order
    //let argsAux = args.map(pivot => parseInt(pivot)).sort(); // Ascii character order
    console.log(`  sorted: ${argsAux}`);
    let res = {
        largest : argsAux[argsAux.length - 1],
        smallest : argsAux[0],
    }
    return res;
}

function fetchGreaterLessObject(... args) {
    console.log(`original: ${args}`);
    let argsAux = args.map(pivot => parseFloat(pivot)).sort((a, b) => a - b); // Value number order
    //let argsAux = args.map(pivot => parseInt(pivot)).sort(); // Ascii character order
    console.log(`  sorted: ${argsAux}`);
    return new TwoDifferentNumbers(argsAux[argsAux.length - 1], argsAux[0]);
}

let resultA = fetchGreaterLess(4, 99, 5, 20, -56, 3.4, 3, -56.3);
console.log(`A. Largest =  ${resultA.largest} , Smallest = ${resultA.smallest}\n`);

let resultB = fetchGreaterLessObject(4, 99, 5, 20, -56, 3, -56.3);
console.log(`B. Largest =  ${resultB.largest} , Smallest = ${resultB.smallest}\n`)

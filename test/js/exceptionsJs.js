try {
    console.log(`try`)
    let op1 = 5
    let op2 = 2.5
    //console.log(op1 / op2)
    console.log(op1 / op3)
} catch (error) {
    console.log(`catch: error : ${error}`)
} finally {
    console.log(`finally: with or without error`)
}
console.log(`Out of try/catch statement`)
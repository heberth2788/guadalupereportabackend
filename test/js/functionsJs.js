function fun1() {
    console.log(`fun1`);
}
fun1();

var fun2 = function() {
    console.log(`fun2`);
}
fun2();

// IIFE (Inmediately invoked function expression)
(function() {
    console.log(`Anonymous function`)
})();

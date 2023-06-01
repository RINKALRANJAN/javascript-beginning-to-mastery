// // callback functions 

// function myFunc2(name) {

//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback) {
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }
// myFunc(myFunc2);

function x(va) {
    console.log("i am there");
    console.log(`name is ${va}`);
}

function y(callback) {
    console.log("i am in y");
    callback("rinkal")
}
y(x);








// function x(a, s) {
//     var c = a + s;
//     console.log(c);
//     // y();
// }

// function y(a) {
//     a();
// }
// x(3, 4);
// y(x);
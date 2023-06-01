// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }



// const ans = addAll(4,5,4,2,10);
// console.log(ans);
// let a = 4;
// console.log(`my number is ${a}`);
// const add = function(var1, var2) {



// console.log(`add is ${var1} + ${var2}`);
// }
// add(4, 5);

function myfun2(name) {
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myfun(callback) {
    callback("rinkal");
    // a(rinkal)
}
myfun(myfun2);
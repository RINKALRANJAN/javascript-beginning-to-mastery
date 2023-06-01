// important array methods 

// const numbers = [4, 2, 5, 8];

// function myfunc(number, index) {
//     console.log("index is", index);
//     console.log(`${number}*2=${number*2}`);
// }
// myfunc(numbers[0], 0);

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

// const users = [
//     { firstName: "harshit", age: 23 },
//     { firstName: "mohit", age: 21 },
//     { firstName: "nitish", age: 22 },
//     { firstName: "garima", age: 20 },
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }
const number = [5, 6, 7, 8];

function myfunc(number, index) {
    console.log(`index is ${index} number is ${number}`);
}
// number.forEach(myfunc);
for (var i = 0; i < number.length; i++) {
    myfunc(number[i], i);
}
const user = [
    { firstName: "harshit", age: 23 },
    { firstName: "rinkal", age: 21 },
    { firstName: "harh", age: 20 },
    { firstName: "ksh", age: 22 },
]

function myfunc(user) {
    console.log(`name is ${user.firstName}`);
}
// for (let i of user) {
//     console.log(i.age);
// }
user.forEach(myfunc)
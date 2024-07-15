// var, let, const

// Q : 1
var a = 10;
console.log(a)
console.log(typeof a)

// Q : 2
let username  = "Varun";
console.log(username.toUpperCase())

// Q : 3
const isLoggedIn = true;
console.log(isLoggedIn)

// Q : 3.1
let test = 6 < 3;
console.log(test)

let g = null;
console.log(g)

// Q : 4
let arr = [1,2,3,"amith", true, {id:1, username: "knkjvn"}];
console.log(arr[3])
console.log(typeof arr)

const user = {
    id: 1,
    username:"hgehi",
    age: 23,
    isLoggedIn: true
}

console.log(user.age)
console.log(user["id"])
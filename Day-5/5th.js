//Q1 function even or odd
//2 types of function arrow , normal function 

// function evenorodd (number) {
//     if(number%2==0)
//     {
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// }
// evenorodd(2)

//Q2 square of number
// function square(n) {
//     return Math.pow(n,2)
   
// }

// const n1=square(2);
// console.log(n1)

//Q3 function expression find min of two numbers
// function min(n,m) {
//     return Math.min(n,m)
   
// }

// const n1=min(12,4);
// console.log(n1)

//Q4 concate 2 string
// function namee(fn,ln)//parameter
//  {
//    //return fn+ln;
   
// }

// const n1=namee('varun','amith');//arguments
// console.log(n1)

// const sum = (a,b) => {//>method 1
//     return a+b;
// }//arrow-function
// console.log(sum(10,5))

// const sum1 = (a,b) => a-b//>method 2
// console.log(sum1(10,5))

// //>higher order function passing other function as parameters

// //>callback inside one function calling other function 

//Q5

// const namee=(name,key) =>{
//     return name.includes(key)//
// }
// console.log(namee('varun','m'))

//q6 multipyl using default value b=1
// const mul=(a,b=1) =>{
//     return a*b
// }
// console.log(mul(10))


//q7 name and age using default value
// const namee=(name,age=1) =>{
//     return `hello ${name} your age is ${age} `
// }
// console.log(namee('varun',99))


//higher order function take io fun and ip
// function callback(number){
//     for (let i = 1; i < number; i++) {
//         console.log("hello")
        
//     }
// }
// function secondfunction(fn,num)
// {
//     fn(num)
// }
// secondfunction(callback,5)



function compose(f, g) {
    return function(x) {
      return g(f(x));
    };
  }
  
 
  function add2(x) {
    return x + 2;
  }
  
  function multiplyBy3(x) {
    return x * 3;
  }
 
  const composedFunction = compose(add2, multiplyBy3);
  const result = composedFunction(5); 
  console.log(result); 
  
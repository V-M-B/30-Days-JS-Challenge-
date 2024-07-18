// //q1 array 1-5
// // const arr=[1,2,3,4,5];
// // console.log(arr)

// //q2accessing index 
// const arr=[1,2,3,4,5];
// console.log(arr[0],arr[4])

// //Basics
// //q3 use push method
// arr.push(6)
// console.log(arr)
// //pop last element
// arr.pop()
// console.log(arr)
// //shit 
// arr.unshift(5)
// console.log(arr)
// arr.shift()
// console.log(arr)
// //----------------------------------------------------------------------------------
// //intermediate
// //map
// const myArray=[10,20,30,40,50];
// const result=myArray.map((cur,index,arr)=>{
//     return cur*2;
// })
// console.log(result)


// //filters
// const myArra1=[1,2,3,4,5,6];
// const result1=myArra1.filter((cur,index,arr)=>{
//     return cur%2==0;
// })
// console.log(result1)

// //Reduce
// const result2=myArra1.reduce((acc,cur,index,arr)=>{
//     return acc+=cur;
// },5)
// console.log(result2)
// //----------------------------------------------------------------------------------
// //for
// for (let index = 0; index < myArra1.length; index++) {
//    console.log(myArra1[index])
    
// }

// //for-each
// myArra1.forEach(element => {
//     console.log(element)
// });

//----------------------------------------------------------------------------------

//2d array
const a1=[[1,2,3,4,5],[6,7,8,9]];
for (let index = 0; index < a1.length; index++) {
   for (let index1 = 0; index1 < a1[index].length; index1++) {
    console.log(a1[index][index1])
    
   }
    
}

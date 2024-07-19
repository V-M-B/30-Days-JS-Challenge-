//objets can be made 2 ways 
//1.constructor (if it is made out of constructer it is *singleton* )//object.create
//2.object literals.

//Q1 create object called book.
// const book={
//     //key:value (key will be string)
//     title:"chaiaurcode",
//     author:"hitesh",
//     "author full name":"mr Chai aur Code",
//     year:2022
// }
// console.log(book)
// console.log(book.title)
// console.log(book["author full name"])
// //to change the value
// book.year=2000;
// console.log(book)
// //to freeze the value from changing
// Object.freeze(book)


//Q3 add mtd to the book obj that returns a string
// with the book title and author 
// book.details=function(){
//     return `tilt : ${this.title},author : ${this.author}`
// }
// console.log(book.details())

//Q4 
// book.yearchange=function name(newyear) {
//     book.year=newyear;
// }
// book.yearchange(1801)
// console.log(book)



//-------------------------------------visti--once--again------------------------------//
// Task 5
const library = {
    name: "City Library",
    books: [
        { title: "chaiaurcode", author: "hitesh", year: 2022 },
        { title: "The Silent Patient", author: "Alex Michaelides", year: 2019 }
    ]
};

// //console.log(library);

// // Task 6
// console.log(library.name);
// library.books.forEach(book => {
//     console.log(book.title);
// });

//q7
// Task 8
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));

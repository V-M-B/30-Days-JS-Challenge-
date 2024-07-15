//q1 if-else (* - 0)
const number1=0;
if (number1<0) {
    console.log("negative number")
}
else if(number1>0){
    console.log("positvie number")
}
else{
    console.log("Number is o")
}

//q2 eligable to vote
const age=96;
if (age<18) {
    console.log("Child")
}
else if(age >=18 && age<=60 ){
    console.log("vote for money ")
}
else if(age<0 || age>60 ){
    console.log("Invalid age RIP")
}

//Q3 nested if
const a = 10;
const b = 20;
const c = 100;
if (a < b) {
  if (b < c) {
    console.log(" C is greater ")
  }else{
    console.log("B is greter")
  }
}else if(a<c){
    console.log("A is greater ")
}

//q4 switch
const number = 11;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("lol")
    break;
}


// q5 marks 
// In this implementation, the switch statement evaluates true, and each case is a conditional
// expression that will be checked against true. This way, the correct grade will be printed based on the value of marks.
const marks =30;
switch (true) {

  case (marks>=85 && marks <=100):
    console.log("A")
    break;

  case (marks<85 && marks>=75):
    console.log("B")
    break;

  case (marks>=35 && marks<75):
    console.log("C")
    break;

  default:
    console.log("Fail LOL ")
    break;
}

//ternary operator
const c1=60;
const result=(c1%2==0)? true:false
console.log(result)


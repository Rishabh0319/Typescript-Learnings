//  BOOLEAN TYPE
//  in typescript the boolean type represents the value which can be either true or false. it is one of the basic premitive types in the language
// EXAMPLE
var isMyNameRishabh = true;
var isDone = true;
var sunSetInTheEast = false;
// Exercise
// write a typescript functions called isEven that takes a number as a perameter and return true if the number is even and false if the number is odd
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
console.log("Answer 1:");
console.log(isEven(12));
console.log(isEven(4546));
console.log(isEven(7546));
console.log(isEven(3));
// Q:2  write a typescript function called isDivisibleBy4And8 thats takes a number as a perameter and return true if the number is divisible by both 4 and 8.
function isDivisibleBy4And8(num) {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    }
    return false;
}
console.log("Answer 2:");
console.log(isDivisibleBy4And8(16));
console.log(isDivisibleBy4And8(12));

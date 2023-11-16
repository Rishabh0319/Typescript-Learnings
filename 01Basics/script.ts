

// Q:1 What is Type Annotation ?

// Ans:1 in typescript, type annotaion is the way of explicitly specifying the type of variable, function perameter or function return value   

// EXAMPLE:

let myname: string = "Rishabh Tripathi";
let myAge: number = 23;

console.log(myname, myAge);





// Some Assignments


// Q1: Declare a variable sentence of type string and assign it a sentence of your choice. find the length of the string and store it in a variable called sentenceLength

let sentence: string = "Rishabh Tripathi";
let stringLength: number = sentence.length;
console.log(stringLength);




// Q2: Declare a variable text of type string and assign it sentence of your choice. convert the entire sentence to uppercase and store the result in a variable called uppercase text. then convert the entire sentence to lowercase and store the result in a variable called lowercaseText

let text: string = "hello world";
let uppercase: string = text.toUpperCase();
let lowercase: string = text.toLowerCase();

console.log(uppercase, lowercase);





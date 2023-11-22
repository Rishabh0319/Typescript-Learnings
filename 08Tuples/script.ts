

//  *********** Q1: what is Tuples in Typescript ? *************

// Ans: Tuples is a data structure in typescript which is store fixed size ordered element. each element have a specific type, you can access based on index. Tuples is looking similar to arrays but it's size is fix and each element have specific type

// Ans: Tuples TypeScript mein ek data structure hai jo kuch fixed size ke ordered elements ko store karta hai. Har element ka specific type hota hai, aur aap unhe index ke basis par access kar sakte hain. Tuples ko array ke similar dekha ja sakta hai, lekin unka size fix hota hai aur har element ke liye specific type specify kiya jata hai.


// ****** Example Syntax *******


// Yahan, exampleTuple ek tuple hai jo ek string, ek number, aur ek boolean value store karta hai.

let exampletuples: [string, number, boolean];         // tuples in TS
exampletuples = ["Rishabh", 23, true];



//  ********* Use Case of Tuples **********

// Tuples ka use case tab hota hai jab aapko ek fixed set of related values ko represent karna ho, aur aap chahte hain ki har value ka specific type ho. 



// ****** first use case in functions: ******

// Tuples ka istemal kisi function ki multiple values return karne ke liye kiya ja sakta hai.


// this function returning Tuples
function getUserInfo(): [string, number] {
    return ["Rishabh", 23];
}

let user = getUserInfo();

console.log(user[0]);         // you can access tuples like arrays
console.log(user[1]);         // you can access tuples like arrays







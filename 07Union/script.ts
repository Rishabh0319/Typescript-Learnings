

//Q: *********** what is union type in Typescript ? ************

// Ans: Union type is allows you to support multiple data types in single variable, function and array 

// it is also help us to avoid (any) type in Typescript

// Union types TypeScript mein ek concept hai jo aapko allow karta hai multiple data types ko represent karne mein. Jaise ki naam se hi suggest hota hai, union type ek union (ya combination) of multiple types hota hai.


// EXAMPLES

let score: number = 36;      // this variable only stores number type 
let score1: string = "Typescript"    // this variable only stores string type 
let score2: number | string = 98;  // this variable can hold number or string at a time

score2 = "Hello";          // holding string
console.log(score2);
score2 = 12345678;         // holding number
console.log(score2);








// ************ defining custom datatype with union **************


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number
}

let Rishabh: User | Admin = { name: "Rishabh", id: 7 };

console.log(Rishabh.name);  // Rishabh as User

Rishabh = { username: "Rishabh Admin", id: 34 }

console.log(Rishabh.username); // Rishabh as Admin









// **************** use cases of Union in function ****************

// we can also defines a function which supports multiple datatypes but Not (ANY)


function fun(value: number | string) {
    //    console.log(value.toUppercase()); // in this we need to specify the type

    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }

    if (typeof value === "number") {
        console.log(value ** 2);
    }
}

// this function accepts both kind of datatype sting or number because of union type perameter
fun("rishabh");
fun(8);




// ************* use of Union in case of Arrays ************


const arr1: number[] = [12, 23, 34, 45];   // it only stores the numbers

const arr2: string[] = ["Javascript", "Typescript", "Angular"];  // only stores the strings

const arr3: string[] | number[] = [12, 54, 55]; // it either store number or string

const arr4: (string | number)[] = ["Rishabh", 23]; // it store both number and string but only this two not every datatype
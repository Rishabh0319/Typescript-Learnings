//Q: *********** what is union type in Typescript ? ************
// Ans: Union type is allows you to support multiple data types in single variable, function and array 
// it is also help us to avoid (any) type in Typescript
// Union types TypeScript mein ek concept hai jo aapko allow karta hai multiple data types ko represent karne mein. Jaise ki naam se hi suggest hota hai, union type ek union (ya combination) of multiple types hota hai.
// EXAMPLES
var score = 36; // this variable only stores number type 
var score1 = "Typescript"; // this variable only stores string type 
var score2 = 98; // this variable can hold number or string at a time
score2 = "Hello"; // holding string
console.log(score2);
score2 = 12345678; // holding number
console.log(score2);
var Rishabh = { name: "Rishabh", id: 7 };
console.log(Rishabh.name); // Rishabh as User
Rishabh = { username: "Rishabh Admin", id: 34 };
console.log(Rishabh.username); // Rishabh as Admin
// **************** use cases of Union in function ****************
// we can also defines a function which supports multiple datatypes but Not (ANY)
function fun(value) {
    //    console.log(value.toUppercase()); // in this we need to specify the type
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(Math.pow(value, 2));
    }
}
// this function accepts both kind of datatype sting or number because of union type perameter
fun("rishabh");
fun(8);
function DataBase(user) {
    if (user.name && user.userId) {
        console.log("you Are normal user");
    }
    else {
        console.log("you Are Admin user");
    }
}
var RishabhTripathi = {
    name: "Rishabh Tripathi",
    userId: 1234,
    DB_Key: "qwertyuiop"
};
var MukundTripathi = {
    name: "Rishabh Tripathi",
    userId: 1234,
};
DataBase(RishabhTripathi);
DataBase(MukundTripathi);

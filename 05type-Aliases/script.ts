

//Q1: *********** So what is Type Aliases ? *************

// Ans1: when you want to define your own datatype then typescript allows us to creat your own datatypes by using type Aliases and start by the keyword (type)

// NOTE:-  this defination of type Aliases is defined by me according to my yet understanding so please do not agree only this info cross check the official docs also this is my rough understanding

// EXAMPLE

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(User: User) {

}

createUser({ name: "Rishabh", email: "ris@gmail.com", isActive: true });     // calling function





// another EXAMPLE

// defining point Datatype
type point = {
    x: number;
    y: number;
}

function printCord(pt: point) {
    console.log(`cordinate x value is ${pt.x}`);
    console.log(`cordinate x value is ${pt.y}`);
}

printCord({ x: 100, y: 100 });







// ************ usecase of (Readonly) keyword in type aliases *************


type Person = {
    readonly _id: string;              // now this property cannot mutate
    name: string;
    email: string;
    isActive: boolean;
}

// creating a person type variable
let u1: Person = {
    _id: "12394@3$4%43&^%&#",
    name: "Rishabh Tripathi",
    email: "RT@RT.com",
    isActive: true
}


console.log(u1.email);
u1.email = "Rishabh@gmail.com"// you can mutate the properties of u1 variable
console.log(u1.email);

console.log(u1._id);
// u1._id = "SomeotherID" // but you can't mutate the (readonly) propery of Aliases you can read only those properties











// ************** optional properties in type aliases ***************


// Understand the use case:

// suppose we have a (User) typed datatype in this data type we have most common properties like {name, email, age, isActive} ..etc but suppose a senerio when some user have a cradit card and we know in india mostely peoples not have a cradit cards but some peoples have, so how do we define a (User) datatype which can store both kind of (Users) data in a same data type ?

// in this kind of case we use (optional) in Type Aliases

//  understand with EXAMPLE



// define the credit card type
type CreditCardType = {
    cardNumber: number;
    cardValidDate: string;
    cardCvvNumber: number;
}

// define the user type
// (here you can skip the card information not mandatory it's optional(?))
type BankUser = {
    readonly _id: string;
    name: string;
    email: string;
    age: number;
    phone: number;
    Aadhar: number;
    PAN: number;
    balance: number;
    creditCard?: CreditCardType; //(optional)
}


// this user have a credit card
let Rishabh: BankUser = {
    _id: "BankUser1_id",
    name: "Rishabh Tripathi",
    email: "rishabh@gmail.com",
    age: 23,
    phone: 9898989890,
    Aadhar: 123456789101112,
    PAN: 1234123412341234,
    balance: 1000,
    creditCard: {
        cardNumber: 1234567890098765,
        cardValidDate: "08/28",
        cardCvvNumber: 678
    }
}

// this user Don't have a credit card
let Mukund: BankUser = {
    _id: "BankUser1_id",
    name: "Mukund Tripathi",
    email: "mukund@gmail.com",
    age: 22,
    phone: 9898873890,
    Aadhar: 128279789101112,
    PAN: 1234090032341234,
    balance: 3000,
}



function printCreditCardDetailes(user: BankUser) {
    if (!user.creditCard) {
        console.log(`${user.name} don't have a credit card`);
    } else {
        console.log(`${user.name} have a credit card\n`);
        console.log(`cardNumber: ${user.creditCard.cardNumber}\ncardValidDate: ${user.creditCard.cardValidDate}\ncardCvvNumber: ${user.creditCard.cardCvvNumber}\n`);

    }
}

printCreditCardDetailes(Rishabh);
printCreditCardDetailes(Mukund);


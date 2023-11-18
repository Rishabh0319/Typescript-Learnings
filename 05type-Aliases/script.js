//Q1: *********** So what is Type Aliases ? *************
function createUser(User) {
}
createUser({ name: "Rishabh", email: "ris@gmail.com", isActive: true }); // calling function
function printCord(pt) {
    console.log("cordinate x value is ".concat(pt.x));
    console.log("cordinate x value is ".concat(pt.y));
}
printCord({ x: 100, y: 100 });
// creating a person type variable
var u1 = {
    _id: "12394@3$4%43&^%&#",
    name: "Rishabh Tripathi",
    email: "RT@RT.com",
    isActive: true
};
console.log(u1.email);
u1.email = "Rishabh@gmail.com"; // you can mutate the properties of u1 variable
console.log(u1.email);
console.log(u1._id);
// this user have a credit card
var Rishabh = {
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
};
// this user Don't have a credit card
var Mukund = {
    _id: "BankUser1_id",
    name: "Mukund Tripathi",
    email: "mukund@gmail.com",
    age: 22,
    phone: 9898873890,
    Aadhar: 128279789101112,
    PAN: 1234090032341234,
    balance: 3000,
};
function printCreditCardDetailes(user) {
    if (!user.creditCard) {
        console.log("".concat(user.name, " don't have a credit card"));
    }
    else {
        console.log("".concat(user.name, " have a credit card\n"));
        console.log("cardNumber: ".concat(user.creditCard.cardNumber, "\ncardValidDate: ").concat(user.creditCard.cardValidDate, "\ncardCvvNumber: ").concat(user.creditCard.cardCvvNumber, "\n"));
    }
}
printCreditCardDetailes(Rishabh);
printCreditCardDetailes(Mukund);



// common object in TS

const User = {
    name: "Rishabh",
    age: 23,
    email: "rishabh@gmail.com",
    isActive: true
}



// passing object to the function as a perameter

function createUser({ name, email, isPayed }: { name: string, email: string, isPayed: boolean }) {

}

createUser({ name: "Rishabh", email: "rishabh@gmail.com", isPayed: true });  // function call







// returning object from the function as a result

function createBill(): { name: string, amount: number, tax: number, totalAmount: number } {
    let bill = {
        name: "Rishabh",
        amount: 260,
        tax: 18,
        totalAmount: 278
    }
    return bill;
}






// Passing extra property value as an object to function perameter in right way


// wrong way

// function createUser1({ name, ispayed }: { name: string, ispayed: true }) {

// }
// createUser1({ name: "Rishabh", ispayed: true, email: "Ris@gmail.com" });


// right way

// function createUser1({ name, ispayed }: { name: string, ispayed: true }) {

// }
// let newUser = { name: "Rishabh", ispayed: true, email: "Ris@gmail.com" };
// createUser1(newUser);





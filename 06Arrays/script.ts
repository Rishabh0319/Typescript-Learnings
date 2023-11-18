
// ********** in Typescript we have multiple ways to define arrays *********


// the wrong way
const arr = [];              //this do't shows error but it type is (never) 
// arr.push("rishabh");     //you can't push string into (never) datatype 




// ********** the right way to define Array in Typescript ***********

const superHeroes: string[] = [];      // array of string in TS
superHeroes.push("Ironman", "Spiderman", "Hulk", "Thor", "Capton America", "Vision");

// printing super heroes
for (let i: number = 0; i < superHeroes.length; i++) {
    console.log(`${i + 1}: ${superHeroes[i]}`);
}


const phoneNumbers: number[] = []; // array of numbers in TS

phoneNumbers.push(1234567890, 9876543210, 9876567890, 2359876028, 9782564307);

// printing phone numbers
for (let i: number = 0; i < phoneNumbers.length; i++) {
    console.log(`${i + 1}: ${phoneNumbers[i]}`);
}





// ********** another way to define Array in Typescript ***********


const Friends: Array<string> = [];    // define array of strings

Friends.push("Rajat", "Ritik", "Shivam", "Muskan", "Shanvi", "Kashish",);

const FriendsAges: Array<number> = new Array();

FriendsAges.push(23, 23, 23, 23, 18, 21);

for (let i: number = 0; i < Friends.length; i++) {
    console.log(`${i + 1}: name:${Friends[i]} age:${FriendsAges[i]}`);
}









// ********** define custom Datatypes Array in Typescript ***********


type User = {
    readonly _id: string;
    name: string;
    age: number;
    email: string;
    phone: number;
}

const users: Array<User> = [];        // Array of User

let person1: User = {
    _id: "Ris@1234",
    name: "Rishabh Tripathi",
    age: 23,
    email: "rishabh@gmail.com",
    phone: 1234567890
}


let person2: User = {
    _id: "Muk@1234",
    name: "Mukund Tripathi",
    age: 22,
    email: "mukund@gmail.com",
    phone: 1239877890
}

users.push(person1, person2);


function printUsers(users: Array<User>) {
    for (let i: number = 0; i < users.length; i++) {
        console.log(`UserId: ${users[i]._id} name:${users[i].name} age: ${users[i].age} email:${users[i].email}
        phone:${users[i].phone}`);
    }
}

printUsers(users); // passing array to function





// ************ Defined 2D Array in TS **************

// const _2dArr: number[][] = []
const _2dArr: number[][] = [
    [12, 23, 34, 45],
    [69, 78, 89, -56]
];

// another way to define 2D Array

const _2DArr: Array<number>[][] = new Array();


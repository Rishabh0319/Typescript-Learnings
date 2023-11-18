// ********** in Typescript we have multiple ways to define arrays *********
// the wrong way
var arr = []; //this do't shows error but it type is (never) 
// arr.push("rishabh");     //you can't push string into (never) datatype 
// ********** the right way to define Array in Typescript ***********
var superHeroes = []; // array of string in TS
superHeroes.push("Ironman", "Spiderman", "Hulk", "Thor", "Capton America", "Vision");
// printing super heroes
for (var i = 0; i < superHeroes.length; i++) {
    console.log("".concat(i + 1, ": ").concat(superHeroes[i]));
}
var phoneNumbers = []; // array of numbers in TS
phoneNumbers.push(1234567890, 9876543210, 9876567890, 2359876028, 9782564307);
// printing phone numbers
for (var i = 0; i < phoneNumbers.length; i++) {
    console.log("".concat(i + 1, ": ").concat(phoneNumbers[i]));
}
// ********** another way to define Array in Typescript ***********
var Friends = []; // define array of strings
Friends.push("Rajat", "Ritik", "Shivam", "Muskan", "Shanvi", "Kashish");
var FriendsAges = new Array();
FriendsAges.push(23, 23, 23, 23, 18, 21);
for (var i = 0; i < Friends.length; i++) {
    console.log("".concat(i + 1, ": name:").concat(Friends[i], " age:").concat(FriendsAges[i]));
}
var users = []; // Array of User
var person1 = {
    _id: "Ris@1234",
    name: "Rishabh Tripathi",
    age: 23,
    email: "rishabh@gmail.com",
    phone: 1234567890
};
var person2 = {
    _id: "Muk@1234",
    name: "Mukund Tripathi",
    age: 22,
    email: "mukund@gmail.com",
    phone: 1239877890
};
users.push(person1, person2);
function printUsers(users) {
    for (var i = 0; i < users.length; i++) {
        console.log("UserId: ".concat(users[i]._id, " name:").concat(users[i].name, " age: ").concat(users[i].age, " email:").concat(users[i].email, "\n        phone:").concat(users[i].phone));
    }
}
printUsers(users); // passing array to function

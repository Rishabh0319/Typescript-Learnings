//  write a common function in typescript
function isLogedIn(userName, Password) {
    var savedUN = "Rishabh";
    var savedPW = "pass@1234";
    if (userName === savedUN && Password === savedPW) {
        return true;
    }
    return false;
}
console.log("common function result");
console.log(isLogedIn("Rishabh", "pass@1234")); // function call
console.log(isLogedIn("rishabh", "pass@146")); // function call
//  write a fat arrow function in typescript
var isLogedIn2 = function (userName, Password) {
    var savedUN = "Rishabh";
    var savedPW = "pass@1234";
    if (userName === savedUN && Password === savedPW) {
        return true;
    }
    return false;
};
console.log("Arrow function result");
console.log(isLogedIn2("Rishabh", "pass@1234")); // function call
console.log(isLogedIn2("rishabh", "pass@146")); // function call
//  default perameter function
var isLogedIn3 = function (username, password, isPayed) {
    if (isPayed === void 0) { isPayed = false; }
    var savedUN = "Rishabh";
    var savedPW = "pass@1234";
    if ((username === savedUN && password === savedPW) && isPayed) {
        return "username and password is correct and user also payed";
    }
    else if ((username === savedUN && password === savedPW) || isPayed) {
        return "username and password is correct and user not payed";
    }
    else {
        return "username and password is incorrect";
    }
};
console.log("Default perameter function result");
console.log(isLogedIn3("Rishabh", "pass@1234", true)); // function call
console.log(isLogedIn3("Rishabh", "pass@1234")); // function call
console.log(isLogedIn3("rishabh", "pass@146")); // function call

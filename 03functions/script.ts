
//  write a common function in typescript

function isLogedIn(userName: string, Password: string) {
    let savedUN = "Rishabh";
    let savedPW = "pass@1234";

    if (userName === savedUN && Password === savedPW) {
        return true;
    }
    return false;
}

console.log("common function result");
console.log(isLogedIn("Rishabh", "pass@1234"));     // function call
console.log(isLogedIn("rishabh", "pass@146"));     // function call





//  write a fat arrow function in typescript

const isLogedIn2 = (userName: string, Password: string): boolean => {
    let savedUN = "Rishabh";
    let savedPW = "pass@1234";

    if (userName === savedUN && Password === savedPW) {
        return true;
    }
    return false;
}

console.log("Arrow function result");
console.log(isLogedIn2("Rishabh", "pass@1234"));     // function call
console.log(isLogedIn2("rishabh", "pass@146"));     // function call







//  default perameter function

const isLogedIn3 = (username: string, password: string, isPayed: boolean = false): string => {
    let savedUN = "Rishabh";
    let savedPW = "pass@1234";

    if ((username === savedUN && password === savedPW) && isPayed) {
        return "username and password is correct and user also payed";
    } else if ((username === savedUN && password === savedPW) || isPayed) {
        return "username and password is correct and user not payed";
    }
    else {
        return "username and password is incorrect";
    }
}

console.log("Default perameter function result");
console.log(isLogedIn3("Rishabh", "pass@1234", true));     // function call
console.log(isLogedIn3("Rishabh", "pass@1234"));     // function call
console.log(isLogedIn3("rishabh", "pass@146"));     // function call

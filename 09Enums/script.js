// ********* What is Enums in Typescript ? ***********
//Ans: Enums ka istemal woh jagahon par hota hai jahan aapko predefined, limited, aur related values ka set hai. Ye values aksar numeric ya string identifiers ke saath associate hote hain aur code ko read karne aur maintain karne mein madad karte hain. Enums aapko type safety bhi provide karte hain, jisse aapko runtime errors se bachne mein help milti hai.
// Enums ka istemal kai alag-alag situations mein hota hai, jahan aapko kisi set ke fixed values ko represent karna hota hai. Yahan kuch use cases hain jahan enums ka istemal karna beneficial ho sakta hai:
// **** Syntax Examples ****
// Enums ka istemal directional values (North, East, South, West) ko represent karne mein hota hai. Isse code ko padhne mein aur samajhne mein madad milti hai.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var myDirection = Direction.East;
//Days of the week ko represent karne ke liye enums ka istemal hota hai.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var Today = Days.Wednesday;
//Menu items ya navigation options ko represent karne ke liye enums ka istemal hota hai.
var MenuOptions;
(function (MenuOptions) {
    MenuOptions[MenuOptions["Home"] = 0] = "Home";
    MenuOptions[MenuOptions["About"] = 1] = "About";
    MenuOptions[MenuOptions["Services"] = 2] = "Services";
    MenuOptions[MenuOptions["Contact"] = 3] = "Contact";
})(MenuOptions || (MenuOptions = {}));
var selectedOption = MenuOptions.Home;
//Enums ka istemal HTTP status codes ko represent karne mein hota hai.
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
var responseStatus = HttpStatus.OK;
console.log(responseStatus);




// ********* What is Enums in Typescript ? ***********

//Ans: Enums ka istemal woh jagahon par hota hai jahan aapko predefined, limited, aur related values ka set hai. Ye values aksar numeric ya string identifiers ke saath associate hote hain aur code ko read karne aur maintain karne mein madad karte hain. Enums aapko type safety bhi provide karte hain, jisse aapko runtime errors se bachne mein help milti hai.

// Enums ka istemal kai alag-alag situations mein hota hai, jahan aapko kisi set ke fixed values ko represent karna hota hai. Yahan kuch use cases hain jahan enums ka istemal karna beneficial ho sakta hai:


// **** Syntax Examples ****


// Enums ka istemal directional values (North, East, South, West) ko represent karne mein hota hai. Isse code ko padhne mein aur samajhne mein madad milti hai.

enum Direction {
    North,
    East,
    South,
    West
}

let myDirection: Direction = Direction.East




//Days of the week ko represent karne ke liye enums ka istemal hota hai.

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}


let Today: Days = Days.Wednesday;


//Menu items ya navigation options ko represent karne ke liye enums ka istemal hota hai.

enum MenuOptions {
    Home,
    About,
    Services,
    Contact
}

let selectedOption: MenuOptions = MenuOptions.Home;






//Enums ka istemal HTTP status codes ko represent karne mein hota hai.

enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

let responseStatus: HttpStatus = HttpStatus.OK;

console.log(responseStatus);




//State machine ko represent karne ke liye enums ka istemal hota hai, jisse aapko different states aur transitions ko clearly define karne mein madad milti hai.

enum TraficLight {
    red,
    yellow,
    green
}

// Enums ka use tab hota hai jab aapko kisi variable ko limited options (ya choices) mein se ek ko represent karna hai. Ye choices predefined hote hain aur aap inhe ek meaningful name se associate karte hain.

// Jab aap kisi ko limited set of options ya values provide karte hain, jaise ki days of the week, directional values, HTTP status codes, etc., to enums ka istemal clarity aur maintainability ke liye kiya jata hai.





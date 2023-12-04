console.log("hello World");


// ************ What is Generics in Typescript ? ************


// Generics in case of function

// CASE:1

// this function only takes number data as arguments and return number
function identityOne(arg: number): number {
    return arg;
}


// CASE:2

// this function takes and return only either boolean or string 
function identityTwo(arg: boolean | string): boolean | string {
    return arg;
}


// CASE:3
// this function takes any datatype and also return any data type that's create trouble
function identityThree(arg: any): any {
    return arg;
}


// CASE:4
// this function is Generic function it takes any kind of data and return only those kind of data that they get
function identityFour<Type>(arg: Type): Type {
    return arg;
}



//**** */ Q: So what is Different Between Generic and any ? *****

//ANS: any data type take any kind of data and can return any type for example it takes number as an input but it can return string and this is why we need to avoid any

// but in case of Generics you create generic <Type> now it takes any kind of data but there is a rule in generic until you not give any value to genric it accept any value but when you assign the value or datatype one's they will stick on it and function also return those type of value





// ************* Generics in Array and Arrow Function **************


// passing generic array in normal function
// both normal function are same

function getSearchProduct<T>(args: T[]): T {
    let index = 2;
    return args[index];
}

function getSearchProduct2<T>(args: Array<T>): T {
    let index = 12;
    return args[index];
}




// Both arrow function is Same
const getMoreProducts = <T>(args: T[]): T => {
    let index = 0;
    return args[index];
}

const getMoreProducts2 = <T>(args: Array<T>): T => {
    let index = 0;
    return args[index];
}











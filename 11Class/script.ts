

//Q1: ******* What is Class in TS ? ********

//Ans: In object-oriented programming languages like Java, classes are the fundamental entities which are used to create reusable components. It is a group of objects which have common properties. In terms of OOPs, a class is a template or blueprint for creating objects. It is a logical entity.


// Fields: It is a variable declared in a class.
// Methods: It represents an action for the object.
// Constructors: It is responsible for initializing the object in memory.
// Nested class and interface: It means a class can contain another class.




class Student {
    public name: String;
    private age: number;
    public rollNo: number;
    private Gender: string;
    private email: string;
    private phone: number

    constructor(name: String, age: number, rollNo: number, Gender: string, email: string, phone: number) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        this.Gender = Gender;
        this.email = email;
        this.phone = phone;
    }

    public getEmail(): string {
        return this.email;
    }
    public getPhone(): number {
        return this.phone;
    }
    public getGender(): string {
        return this.Gender;
    }
}


let s1 = new Student("Rishabh", 23, 21, "Male", "Ris@gmail.com", 1234567890);
let s2 = new Student("Lavi", 25, 81, "Male", "lavi@gmail.com", 1287607890);
let s3 = new Student("Bikku", 23, 79, "Male", "Bikku@gmail.com", 1235397390);
let s4 = new Student("Shakher", 23, 79, "Male", "Shakher@gmail.com", 2353997532);

console.log(s1.name);
console.log(s2.name);
console.log(s3.name);
console.log(s4.name);

console.log(s1.getEmail());
console.log(s2.getEmail());
console.log(s3.getEmail());
console.log(s4.getEmail());

console.log(s1.getPhone());
console.log(s2.getPhone());
console.log(s3.getPhone());
console.log(s4.getPhone());








// ****** you can directly define properties inside constructor perameters *******
class Coder {
    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string
    ) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
}





// ************** Parts of the Class in TS ****************



// 1. Properties(members): Properties represents the data members of a class. they define the attributes of the objects created from the class


class Animal {
    name: string;
    legs: number;
    hands: number;
    tail: boolean;
    type: string;
    color: string;
}



// 2. Conctructor: Constructor is a special method that gets called when an object is created. It is used to initialize the properties of the object.

class Vehicle {
    height: number;
    width: number;
    color: string;
    engenType: string;
    company: string;

    constructor(height: number,
        width: number,
        color: string,
        engenType: string,
        company: string) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.engenType = engenType;
        this.company = company;
    }
}



// 3. Methods: Methods define the behavior of the class. They are functions associated with the class and can perform actions or calculations.

class Employee {
    name: string;
    email: string;
    phone: number;

    getName() {
        console.log(`My name is ${this.name}`);
    }
    getEmail() {
        console.log(`My name is ${this.email}`);
    }
    getPhone() {
        console.log(`My name is ${this.phone}`);
    }
}


//4. Access Modifiers: TypeScript supports access modifiers like public, private, and protected. They control the visibility of class members.


class BankAccount {
    constructor(
        public name: string,
        private email: string,
        private phone: number,
        private AccountNumber: number,
        private Balance: number,
        protected AccountType: string
    ) {
        this.name = name;
        this.AccountNumber = AccountNumber;
        this.AccountType = AccountType;
        this.Balance = Balance;
        this.email = email;
        this.phone = phone;
    }
}



// 5. Inheritance: Classes in TypeScript support inheritance. A class can inherit properties and methods from another class.



class CreateVehicle {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    start() {
        console.log(`The ${this.brand} is Starting`);
    }
}


// Derived class inherit from Vehicle

class Car extends CreateVehicle {
    numberOfDoors: number;
    color: string;

    constructor(
        brand: string,
        year: number,
        numberOfDoors: number,
        color: string
    ) {
        super(brand, year);

        this.numberOfDoors = numberOfDoors;
        this.color = color;
    }
}

let myCar = new Car("Astonmartin", 2023, 2, "silvergray");

console.log("\n\n" + myCar.brand);
console.log(myCar.year);
console.log(myCar.color);
console.log(myCar.start());






// 6.Getter and Setter: TypeScript allows you to define getter and setter methods for class properties, providing control over read and write access.


class Persion {
    private name: string;
    private age: number;

    getName(): string {
        return `My name is ${this.name}`;
    }

    setName(nameValue: string) {
        if (nameValue === "string") {
            this.name = nameValue;
        }
    }

    getAge(): string {
        return `I am ${this.age} years old`;
    }

    setAge(ageValue: number) {
        if (ageValue >= 1 && ageValue <= 120) {
            this.age = ageValue;
        }
        else {
            console.log("invalid Age ");
        }
    }
}

let p1 = new Persion();

p1.setName("Rishabh Tripathi");
p1.setAge(23);
console.log(p1.getName());
console.log(p1.getAge());






// Static Members: 'static' keyword is used to define static properties and methods. They belong to the class rather than instances of the class.


// we can access static membors of class by using direct class name


class Peoples {
    static count: number = 0;
    static getCount(): number {
        return Peoples.count;
    }

    public id: number;
    public name: string;

    constructor(name: string) {
        this.name = name;
        this.id = ++Peoples.count;
    }
}

const Rishabh = new Peoples("Rishabh");
const Ayush = new Peoples("Ayush");
const Abhishake = new Peoples("Abhishake");
const Arunesh = new Peoples("Arunesh");

console.log(Peoples.getCount());


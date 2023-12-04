//Q1: ******* What is Class in TS ? ********
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Ans: In object-oriented programming languages like Java, classes are the fundamental entities which are used to create reusable components. It is a group of objects which have common properties. In terms of OOPs, a class is a template or blueprint for creating objects. It is a logical entity.
// Fields: It is a variable declared in a class.
// Methods: It represents an action for the object.
// Constructors: It is responsible for initializing the object in memory.
// Nested class and interface: It means a class can contain another class.
var Student = /** @class */ (function () {
    function Student(name, age, rollNo, Gender, email, phone) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        this.Gender = Gender;
        this.email = email;
        this.phone = phone;
    }
    Student.prototype.getEmail = function () {
        return this.email;
    };
    Student.prototype.getPhone = function () {
        return this.phone;
    };
    Student.prototype.getGender = function () {
        return this.Gender;
    };
    return Student;
}());
var s1 = new Student("Rishabh", 23, 21, "Male", "Ris@gmail.com", 1234567890);
var s2 = new Student("Lavi", 25, 81, "Male", "lavi@gmail.com", 1287607890);
var s3 = new Student("Bikku", 23, 79, "Male", "Bikku@gmail.com", 1235397390);
var s4 = new Student("Shakher", 23, 79, "Male", "Shakher@gmail.com", 2353997532);
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
var Coder = /** @class */ (function () {
    function Coder(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
    return Coder;
}());
// ************** Parts of the Class in TS ****************
// 1. Properties(members): Properties represents the data members of a class. they define the attributes of the objects created from the class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 2. Conctructor: Constructor is a special method that gets called when an object is created. It is used to initialize the properties of the object.
var Vehicle = /** @class */ (function () {
    function Vehicle(height, width, color, engenType, company) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.engenType = engenType;
        this.company = company;
    }
    return Vehicle;
}());
// 3. Methods: Methods define the behavior of the class. They are functions associated with the class and can perform actions or calculations.
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getName = function () {
        console.log("My name is ".concat(this.name));
    };
    Employee.prototype.getEmail = function () {
        console.log("My name is ".concat(this.email));
    };
    Employee.prototype.getPhone = function () {
        console.log("My name is ".concat(this.phone));
    };
    return Employee;
}());
// Access Modifiers: TypeScript supports access modifiers like public, private, and protected. They control the visibility of class members.
var BankAccount = /** @class */ (function () {
    function BankAccount(name, email, phone, AccountNumber, Balance, AccountType) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.AccountNumber = AccountNumber;
        this.Balance = Balance;
        this.AccountType = AccountType;
        this.name = name;
        this.AccountNumber = AccountNumber;
        this.AccountType = AccountType;
        this.Balance = Balance;
        this.email = email;
        this.phone = phone;
    }
    return BankAccount;
}());
// 5: Inheritance: Classes in TypeScript support inheritance. A class can inherit properties and methods from another class.
var CreateVehicle = /** @class */ (function () {
    function CreateVehicle(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    CreateVehicle.prototype.start = function () {
        console.log("The ".concat(this.brand, " is Starting"));
    };
    return CreateVehicle;
}());
// Derived class inherit from Vehicle
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, year, numberOfDoors, color) {
        var _this = _super.call(this, brand, year) || this;
        _this.numberOfDoors = numberOfDoors;
        _this.color = color;
        return _this;
    }
    return Car;
}(CreateVehicle));
var myCar = new Car("Astonmartin", 2023, 2, "silvergray");
console.log("\n\n" + myCar.brand);
console.log(myCar.year);
console.log(myCar.color);
console.log(myCar.start() + "hello" + "\n\n");

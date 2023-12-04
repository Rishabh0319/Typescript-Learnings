

// ************ Property Modifiers ***********

// each property in an object type can specify a couple of things 
// 1-> the Type
// 2-> where the property is optional
// 3-> and where the property can be written to


// ******** Optional property in interface *********

// Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.

interface Shape {
    shapeName: string;
}

function getShape(): Shape {
    return { shapeName: "Triangle" };
}

interface PaintOptions {
    shape: Shape;
    Xpos?: number;
    Ypos?: number;
}

const shape = getShape();

function paintShape(opts: PaintOptions) {

}

paintShape({ shape });
paintShape({ shape, Xpos: 45 });
paintShape({ shape, Ypos: 90 });
paintShape({ shape, Xpos: 25, Ypos: 66 });



// ************** Readonly Property in interface ****************

interface Fruits {
    readonly fruit1: string;
    readonly fruit2: string;
}

function whichFruit(fal: Fruits) {
    console.log(fal.fruit1);     // we can read from fal.fruit1
    //fal.fruit2 = "Apple";     // But we Can't re-assign it.   
}




// ******** (readonly) behaviour in case of object  *********

interface Person {
    readonly human: { name: string, age: number };
}

function person1(arg: Person) {
    console.log(arg.human.name);
    arg.human.name = "Rishabh";    // we can read and update properties from (arg.human)   
}

function Person2(arg: Person) {


    // arg.human = {
    //     name: "Rishabh",
    //     age: 23
    // }

    // Cannot assign to 'human' because it is a read-only property.
}







// **************** Extending Types *****************


interface Product {
    productId: number;
    title: string;
    price: number;
    isAvailable: boolean
}

interface ElectronicProduct extends Product {
    color: string;
    wattageRating: number;
    voltageRating: number;
}

interface ClothingProduct extends Product {
    color: string;
    size: string;
}


function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}


let laptop: ElectronicProduct = {
    productId: 1,
    title: "HP Notebook",
    price: 55000,
    isAvailable: true,
    color: 'metalgray',
    wattageRating: 25,
    voltageRating: 12,
}

let SonyTv: ElectronicProduct = {
    productId: 2,
    title: "Sony Bravia OLED",
    price: 130000,
    isAvailable: true,
    color: 'metalgray',
    wattageRating: 25,
    voltageRating: 12,
}

let Shirt: ClothingProduct = {
    productId: 3,
    title: "CK Shirt",
    price: 2000,
    isAvailable: true,
    color: "white",
    size: "XL"
}

let Jeans: ClothingProduct = {
    productId: 4,
    title: "Levise Jeans",
    price: 3800,
    isAvailable: true,
    color: "Dark Blue",
    size: "36''"
}


let clothingProducts: ClothingProduct[] = [Shirt, Jeans];
let TotalCostOfClothingProduct = calculateTotalPrice(clothingProducts);
console.log("TotalCostOfClothingProduct: ", TotalCostOfClothingProduct);


let electronicProducts: ElectronicProduct[] = [laptop, SonyTv];
let TotalCostOfElectronicProduct = calculateTotalPrice(electronicProducts);
console.log("TotalCostOfElectronicProduct: ", TotalCostOfElectronicProduct);

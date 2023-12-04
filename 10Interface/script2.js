// ************ Property Modifiers ***********
function getShape() {
    return { shapeName: "Triangle" };
}
var shape = getShape();
function paintShape(opts) {
}
paintShape({ shape: shape });
paintShape({ shape: shape, Xpos: 45 });
paintShape({ shape: shape, Ypos: 90 });
paintShape({ shape: shape, Xpos: 25, Ypos: 66 });
function whichFruit(fal) {
    console.log(fal.fruit1); // we can read from fal.fruit1
    //fal.fruit2 = "Apple";     // But we Can't re-assign it.   
}
function person1(arg) {
    console.log(arg.human.name);
    arg.human.name = "Rishabh"; // we can read and update properties from (arg.human)   
}
function Person2(arg) {
    // arg.human = {
    //     name: "Rishabh",
    //     age: 23
    // }
    // Cannot assign to 'human' because it is a read-only property.
}
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var laptop = {
    productId: 1,
    title: "HP Notebook",
    price: 55000,
    isAvailable: true,
    color: 'metalgray',
    wattageRating: 25,
    voltageRating: 12,
};
var SonyTv = {
    productId: 2,
    title: "Sony Bravia OLED",
    price: 130000,
    isAvailable: true,
    color: 'metalgray',
    wattageRating: 25,
    voltageRating: 12,
};
var Shirt = {
    productId: 3,
    title: "CK Shirt",
    price: 2000,
    isAvailable: true,
    color: "white",
    size: "XL"
};
var Jeans = {
    productId: 4,
    title: "Levise Jeans",
    price: 3800,
    isAvailable: true,
    color: "Dark Blue",
    size: "36''"
};
var clothingProducts = [Shirt, Jeans];
var TotalCostOfClothingProduct = calculateTotalPrice(clothingProducts);
console.log("TotalCostOfClothingProduct: ", TotalCostOfClothingProduct);
var electronicProducts = [laptop, SonyTv];
var TotalCostOfElectronicProduct = calculateTotalPrice(electronicProducts);
console.log("TotalCostOfElectronicProduct: ", TotalCostOfElectronicProduct);

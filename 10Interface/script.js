"use strict";
// *********** What is Interface in Typescript ? *************
let p1 = {
    PersionId: 1,
    name: "Rishabh Tripathi",
    email: "rishabhtripathi@gmail.com",
    phone: 123456789,
};
console.log(p1.name);
console.log(p1.PersionId);
p1.name = "Rishabh";
// p1.PersionId = 432;    // read only
console.log(p1.name);
//**** EXAMPLE **** */
// ********** Scenario: Ek Online Library Management System *********
// Sochiye aap ek online library management system bana rahe hain jisme aapko books ko represent karna hai. Aap chahte hain ki har book ke liye aap ek consistent structure maintain karein.
// Bina Interface k
let book1 = {
    title: "Deep work",
    author: "Cal Newport",
    pages: 400,
    published: new Date(2013, 8, 12)
};
let book2 = {
    title: "Deep work",
    author: "Cal Newport",
    pages: 400,
    published: new Date(2013, 8, 12)
};
let book3 = {
    title: "Deep Work",
    author: "Cal Newport",
    pages: 400,
    published: new Date(2013, 8, 12),
    price: 295,
    genre: "Self Help"
};
let book4 = {
    title: "Zero To One",
    author: "Peeter Theal",
    pages: 480,
    published: new Date(2012, 5, 2),
    price: 450,
};
//Yahan, Book interface ko define kiya gaya hai jo book objects ke expected structure ko define karta hai. Ab aap jab bhi naya book object create karenge, aapko Book interface ke according properties specify karni padengi.
// Agar aap kisi jagah se genre property remove ya add karte hain, to TypeScript aapko errors dikhayega jahan aapne Book interface ke against violate kiya hoga. Isse aapko code maintain karne mein madad milegi.

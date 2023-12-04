

// *********** What is Interface in Typescript ? *************

//Ans: Interfaces TypeScript mein ek powerful feature hain jo aapko type checking aur code organization mein madad karte hain. 

// Interfaces aapko code ko organize karne mein, type checking mein aur future changes handle karne mein madad karte hain.




interface Persion {
    readonly PersionId: number;
    name: string;
    email: string;
    phone: number;
    address?: string;
}

let p1: Persion = {
    PersionId: 1,
    name: "Rishabh Tripathi",
    email: "rishabhtripathi@gmail.com",
    phone: 123456789,
}

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
}

let book2 = {
    title: "Deep work",
    author: "Cal Newport",
    pages: 400,
    published: new Date(2013, 8, 12)
}


// NOW Assume a sinario
// Yeh toh achha hai, lekin kuch samay baad aap ek naya property add karna chahte hain, jaise genre. Bina interface ke, aapko har jagah manual changes karni padegay, jo ki kfi sir dard vala kam hoga.




// ******** let Define Interface (Interface ka istemal) **********


interface Book {
    title: string;
    author: string;
    pages: number;
    published: Date;
    price: number
    genre?: string;
}


let book3: Book = {
    title: "Deep Work",
    author: "Cal Newport",
    pages: 400,
    published: new Date(2013, 8, 12),
    price: 295,
    genre: "Self Help"
}

let book4: Book = {
    title: "Zero To One",
    author: "Peeter Theal",
    pages: 480,
    published: new Date(2012, 5, 2),
    price: 450,
}


//Yahan, Book interface ko define kiya gaya hai jo book objects ke expected structure ko define karta hai. Ab aap jab bhi naya book object create karenge, aapko Book interface ke according properties specify karni padengi.

// Agar aap kisi jagah se genre property remove ya add karte hain, to TypeScript aapko errors dikhayega jahan aapne Book interface ke against violate kiya hoga. Isse aapko code maintain karne mein madad milegi.






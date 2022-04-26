// Interacción #1: Variables

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

console.log(z);


// Interacción #2: Variables avanzadas

// 1.1

let character = { name: "Jack Sparrow", age: 10 }; // cambiar la variable de const a let para poder cambiar de valor
character = { name: "Jack Sparrow", age: 25 }

console.log(character);


// 1.2

const firstName = 'Jon';
const lastName = 'Snow';
const age = 24;

console.log('Soy', firstName, lastName, 'tengo', age, 'y me gustan los lobos.')


// 1.3 

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log('La suma total de ambos juguetes', toy1.price + toy2.price)


// 1.4

let globalBasePrice = 10000;
let car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
let car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log('El precio final del car1 es:', car1.finalPrice);
console.log('El precio final del car2 es:', car2.finalPrice);



// Interacción #3: Operadores

// 1.1 

alert(10 * 5);

// 1.2

alert(10 / 2);

// 1.3

alert(15 / 9);

// 1.4

let a = 10; // cambiamos el nombre de la variable porque ya existe
let b = 5; // cambiamos el nombre de la variable porque ya existe

let c = (a + b);
console.log(c)

// 1.5

let d = 10; //
let e = 5;

let f = (d * e);
console.log(f)


// Interación #4: Arrays

// 1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0];
console.log(avenger)

// 1.2

const marvel = ["HULK", "SPIDERMAN", "BLACK PANTHER"];


// 1.3

const superHero = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.length;

// 1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
let lastElement = rickAndMortyCharacters[4];
console.log(lastElement);

// 1.5

const rickAndMorty = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMorty.pop();
let firtsElement = rickAndMorty[0]; [4];



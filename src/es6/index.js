function newFunction(name, age, country) {
    var name = name || 'Victor';
    var age = age || 25;
    var country = country || 'MX';
    console.log(name, age, country);
}

/* ES6 Default Value */
function es6 (name = 'Victor', age = 25, country = 'MX') { // Funcion con parametros por default
    console.log(name, age, country);
}

es6();
es6('Manuel', 27, 'MX');

/* ********************Concatenate******************* */

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

/* Template literal */
 
let epicPhrase2 = `${hello} ${world}`; // Template literal
console.log(epicPhrase2);


/* *********************Multiline************************/
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "Nesciunt, quisquam, quis, quia, quam";

    /* ES6 */
let lorem2 = `Hola linea1
Hola Lines2`; // Multiples lineas

    console.log(lorem);
    console.log(lorem2);


/* ********************Destructuring Elements****************************/
let person = {
    'name': 'Victor',
    'age': 25,
    'country': 'MX'
};

console.log(person.name, person.age, person.country);

/* ES6 */
let {name} = person; // Destructuring
console.log(name); // Victor



/* **********************Spread Operator********************** */


let team1 = ['Victor', 'Juan', 'Pedro'];
let team2 = ['Jorge', 'Javier', 'Juan'];

/* Union of arrays */
let education = ['Manuel',...team1, ...team2];  // Concatenar arrays

console.log(education);


/* ********************** Scope ********************** */

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); // Global Let
}

console.log(globalVar); // Global Var
console.log(globalLet); // Error


const a = 'b'; // Constante, no se puede reasignar
a = 'a'; // Error, no se puede reasignar
console.log(a); // Error

/* ********************** Objects ********************** */

let name = 'Victor';
let age = 25;

obj = {name: name, age: age}; // Objeto

//ES6
obj2 = {name, age}; // Object literal shorthand

console.log(obj);
console.log(obj2);

/* ********************** Arrow functions ********************** */
//*this no funciona en arrow functions
const names = [
    {name: 'Victor', age: 25},
    {name: 'Juan', age: 30},
    {name: 'Pedro', age: 25}
];

let listOfNames = names.map(function (item) {
    console.log(item.name); 
});

//ES6
let listOfNames2 = names.map(item => console.log(item.name)); // Funcion con parametros


const listOfNames3 = (name, age, country) => { // Funcion con parametros
    console.log(name, age, country);
}

listOfNames3('Victor', 25, 'MX');

const listOfNames4 = name => console.log(name); // Si solo tiene un parametro

const square = num => num * num; // Funcion que recibe un numero y devuelve el cuadrado, return implicito



/* ********************** Promises ********************** */

const helloPromise = (val) => { // Funcion que devuelve una promesa
    return new Promise((resolve, reject) => { // Funcion que recibe dos parametros, resolve y reject
        if (val) {
            resolve('Hey Ok!'); // Funcion que se ejecuta cuando se cumpla la promesa
        } else {
            reject('Ups Error!'); // Funcion que se ejecuta cuando no se cumpla la promesa
        }
    });
}

helloPromise(true)
    .then(response => console.log(response))
    .catch(error => console.log(error));


/* ********************** Classes ********************** */

class Calculator {  //Clase
    constructor() { // Constructor
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) { // Metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator(); // Instancia de la clase
console.log(calc.sum(9,10)); // 19, se llama la clase como un objeto


/* ********************** Modules ********************** */

const hello = require('./module'); // Require
console.log(hello()); // Hello, import and export modules antiguo


//ES6
import { hello } from './module'; // Importar un modulo
hello(); // Llamar un metodo del modulo



/* ********************** Generators ********************** */

function* helloWorld() { // Generador
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld(); // Instancia del generador
console.log(generatorHello.next().value); // Hello,
console.log(generatorHello.next().value); // World
console.log(generatorHello.next().value); // undefined
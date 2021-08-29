/* *************** Repose Operator, Spread Operator*************** */

const obj = {
    name: 'Victor',
    age: 25,
    city: 'MX'
};

let { name, ...rest } = obj; // {name: solo se extrae, all: todo lo demas en el mismo objeto}
console.log(name); // Victor
console.log(rest);  // {age: 25, city: 'MX'}


/* *************** Propagation Properties *************** */ 

const obj = {
    name: 'Victor',
    age: 25
};

const obj2 = {
    ...obj, // {name: 'Victor', age: 25}, se añade a un nuevo objeto
    country: 'MX',
}

console.log(obj2); // {name: 'Victor', age: 25, country: 'MX'}

/* *************** Promises .Finally *************** */ 

const helloWorld = (val) => {
    return new Promise((resolve, reject) => {
        (val)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
}

helloWorld(true) 
    .then(response => console.log(response)) // Hello World
    .catch(error => console.log(error)) // Test Error
    .finally(() => console.log('Finalizado')); // Finalizado



/* *************** Regex *************** */
// cada () es un grupo;
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //Regla de fecha /([0-9]{4}): 4 digitos del año -([0-9]{2}): 2 digitos del mes -([0-9]{2}): 2 digitos del dia 
const match = regexData.exec('2021-10-29'); // Regresa un array con los valores de la fecha
const year = match[1]; // 2021 [N]: el numero del grupo
const month = match[2]; // 10 [N]: el numero del grupo
const day = match[3]; // 29 [N]: el numero del grupo

console.log(year, month, day); // 2021 10 29
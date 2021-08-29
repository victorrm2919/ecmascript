/* ******************** Objects to arrays ******************** */
//object.entries() devuelve un array con las propiedades del objeto
const data = {
    fronted: 'Victor',
    backend: 'Manuel',
    design: 'Blanca',
}

const entries = Object.entries(data); //Convierte un objeto en un array, devuelve un array de arrays de acuero a la estructura del objeto
console.log(entries); // [ ['fronted', 'Victor'], ['backend', 'Manuel'], ['design', 'Blanca'] ]
console.log(entries.length); // 3




/* ******************** Objects Values ******************** */
//object.values() devuelve un array con los valores de los objetos
const data = {
    fronted: 'Victor',
    backend: 'Manuel',
    design: 'Blanca',
}

const values = Object.values(data); //Convierte un objeto en un array, solo los valores del objeto
console.log(values); // [ 'Victor', 'Manuel', 'Blanca' ]
console.log(values.length); // 3



/* ******************** padding ******************** */
//padStart(n, char) o padEnd(n, char) devuelve un string con el mismo numero de caracteres que el parametro n, pero rellenado con el caracter char

const string = 'Victor'; // string
console.log(string.padStart(10, '*')); // ****Victor (10: longitud final, '*': caracter de relleno), antes de la cadena
console.log(string.padEnd(10, '*')); // Victor**** (10: longitud final, '*': caracter de relleno), despues de la cadena




/* ******************** Trailling comas ******************** */
//trailing commas en los objetos se puede quedar la coma en la ultima propiedad sin que se genere un error
const data = {
    fronted: 'Victor', //trailing comma
}




/* ******************** Async await******************** */
//async function
const helloWorld = (vale) => {
    return new Promise((resolve, reject) => {
        (vale) //Ternario
            ? setTimeout(() => resolve('Hello World'), 3000) //Si es true, se ejecuta la funcion
            : reject(new Error('Test error')) //Si es false, se ejecuta la funcion
    })
}

const helloAsync = async () => {
    const hello = await helloWorld(true); //Espera a que se resuelva la promesa
    console.log(hello); //Hello World
}
helloAsync();
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// })

const anotherFunction = async () => {
    try { //try catch para manejar errores
        const hello = await helloWorld(false); //Espera a que se resuelva la promesa
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
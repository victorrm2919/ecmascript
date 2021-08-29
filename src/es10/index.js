/* ***************** Flat ***************** */
// Aplana un array a un nivel de profundidad

let array = [1, 2, 3, [1 , 2, 3, [1, 2, 3]]];

console.log(array.flat(1));  // [1, 2, 3, 1, 2, 3, [1, 2, 3]]
console.log(array.flat(2));  // [1, 2, 3, 1, 2, 3, 1, 2, 3]
console.log(array.flat(3));  // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
console.log(array.flat(4));  // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]



/* ***************** Flat map ***************** */
// mapea un array y aplana los resultados
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(x => [x, x * 2]));  // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]: value => [value, value * 2]



/* ***************** Trim ***************** */
// Elimina los espacios en blanco del principio y del final de una cadena o en ambos lados
let string = "   Hello World!   ";
console.log(string.trimStart()); // "Hello World!   "
console.log(string.trimEnd());   // "   Hello World!"
console.log(string.trim());       // "Hello World!"



/* ***************** Optional Catch Binding ***************** */
//(error) ya no es necesario capturar el error en catch
try{
    // ...
} catch{  // se  puede omitir la (error), ya no es necesario declarar
    error // ya esta declarado sin colocar el (error)
    // ...
}


/* ***************** From entries ***************** */
//convertir array en objeto
let entries = [['name', 'Victor'], ['age', 25]]; //array
let object = Object.fromEntries(entries); // se convierte en un objeto
console.log(object); // { name: 'Victor', age: 25 }


/* ***************** Object type symbol ***************** */
//Acceder a la descripción de un tipo de objeto (symbol)
let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol); 
console.log(symbol.description); // My Symbol
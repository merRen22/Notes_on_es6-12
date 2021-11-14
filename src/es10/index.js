/**
 * method flat
 * returns a matrix with a flat submatrix
 * recives as argument the depth
 */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

/**
 *  flatMap
 *  maps each element then passes a function an flattens everything
 */
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

/**
 *  trim
 *  just deletes the white spaces at the end or start
 */
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // beggining

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // end

/**
 * Optional catch biding
 * we can omit naming the error inside the catch function
 */
try {
} catch /*(error) not necessary*/ {
  error;
}

/**
 *  fromEntries
 *  array of arrays to object
 */
let entries = [
  ['name', 'oscar'],
  ['age', 32],
];
console.log(Object.fromEntries(entries));

/**
 *  Symbol object
 */
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

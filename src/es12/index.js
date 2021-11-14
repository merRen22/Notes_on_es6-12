/**
 * 🧯 replace & replaceAll
 */
const string = 'Gaaaaaaaaaaaaa piensa pe chato, estudia sonso Gaaaaaaaaaaaaa';

const replacedString = string.replace('chato', 'minion');
console.log(replacedString);

const replacedString2 = string.replaceAll('Gaaaaaaaaaaaaa', 'Estimados');
console.log(replacedString2);

/**
 * 🔒  Private methods
 */
class Message {
  #show(val) {
    // With the # you specify it as a private method
    console.log(val);
  }
}

const message = new Message();
// error 👇
message.show('Hola!');

/**
 * 👽 Promise Any
 * just returns the first promise to be resolver from a list of promises
 */
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

/**
 * 🦴 WeakRef(element);
 * A weak reference to another object
 */
 class AnyClass {
    constructor(element){
        // so we can use this ref and it is not collect by
        // the garbage collector
        this.ref = new WeakRef(element)
    }
    {...}
}

// 🧪 New logic operator
let isTrue = true;
let isFalse = false;
/**
 * &&=
 * so here first we evaluate the logic comparation between x and y and then
 * if true the value of y is assigned to x and if false nothign happens
 *  */ 
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
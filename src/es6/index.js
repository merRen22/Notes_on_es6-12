// default values for when params are not declared
function newFunctionES6(name = 'Oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('Ricardo', 23, 'Colombia');

// awesome concatenation
let epicPhraseES6 = `${hello} ${world}!`;

// multiline description
let Frase_es6 = `Lknlasknlncs
awdwafwadfawfawd
dksvñsnkvlksnnldkvsnd`;

console.log(Frase_es6);

// new destructuration of objects
let person = {
  name: 'Gaaaaaaaaaaaaa',
  nick: 'UwU',
  num: '12314125',
};

let { name, nick, num } = person;

console.log(name, nick);

// arrays conjuction
let conjunto1 = ['a', 'b', 'c'];
let conjunto2 = ['x', 'y', 'z'];

let conjunto_union = ['l', 'm', 'n', ...conjunto1, ...conjunto2];
console.log(conjunto_union);

// local and global scopes

{
  var VariableGlobal = '...';
}

{
  let VariableLocal = '***';
  console.log(VariableLocal); // Accesable 👍
}

console.log(VariableGlobal);
console.log(VariableLocal); // Can not be access

// this thing 👇 can not be reassigned
const a = 'I am eternal';

// Arrow Functions :) ✨
let listOfNamesES6 = names.map((item) =>
  console.log(`After ES6 -> ${item.name}`)
);

// expresive functions with only one param ( you can avoid the parenthesis)
const rand = (name) => {
  console.log(name);
};

// Promises
const helloPromise = (foo) => {
  return new Promise((resolve, reject) => {
    if (foo) {
      resolve('Hey!');
    } else {
      reject('Upss!');
    }
  });
};

const foo = false;
helloPromise(foo)
  .then((response) => console.log('response -> ', response))
  .then(() => console.log('message -> Hello World!'))
  .catch((error) => console.log('error -> ', error));

const button = document.getElementById('btn');

button.addEventListener('click', async function () {
  const module = await import('./file.js');
  module.hello();
});

/**
 *  Big INT: allows to wokr with numbers bigger than 2^53
 *  just by adding an n to the end of the number or by using the BigInt function
 */
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

/**
 * 🤝 Promise All Settled
 * allows to have one big promise that is returned when all the promises that
 * compose it are resolver or rejected
 */
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

/**
 * 🌎 Global This
 */
console.log(window);
// in case yo dont have access to the window function
console.log(globalThis);

/**
 * 🔍 New logic operator : null operator
 */
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2);

/**
 *  ⛓ Optional chaining
 *  just checking if the value is null or not
 */
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}

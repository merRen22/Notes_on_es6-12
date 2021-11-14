/**
 *  Spread Operator
 */

const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX',
};

// only the name is obtain and the rest of the data is stored in addInfo
let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);

/**
 *  Propagation Properties
 *  basically it adds data form one object to an other
 */
const person = {
  name: 'Oscar',
  age: 32,
};

const personInformation = {
  ...person,
  country: 'MX',
};
console.log(`personInformation: `, personInformation);

/**
 * Promise Finally
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((result) => console.log('result -> ', result))
  .catch((err) => console.log('err -> ', err))
  // this right here 👇 awesome it tells us when the promise has already ended even if the result was an error
  .finally(() => console.log('finalizó'));

/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-11-14');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);

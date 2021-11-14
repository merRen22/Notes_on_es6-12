// return data in a matrix
const data = {
  frontend: 'Alej',
  backend: 'Rel',
  design: 'Ana',
};

// generate a matrix 👇
const entries = Object.entries(data);
console.log(entries);
// number of elements inside the object
console.log(entries.length);

// return data in an array
const data = {
  frontend: 'Alej',
  backend: 'Rel',
  design: 'Ana',
};

const values = Object.values(data);
console.log(values);

// Padding: allows for adding empty and new strings to the original
const string = 'hello';

// adds hi at the beggining
console.log(string.padStart(7, 'hi'));

// adds hi at the end
console.log(string.padEnd(12, ' -----'));

// Async Await
const prepareIceCream = (money) => {
  return new Promise((resolve, reject) => {
    if (money >= 500) {
      console.log('We are preparing your Ice cream...');
      setTimeout(() => {
        resolve('Here you are a Chocolate Ice cream');
      }, 6000);
    } else {
      reject('Sorry! You do not have enough money :(');
    }
  });
};

const buyIceCream = async (money) => {
  try {
    console.log('Welcome to Ice Cream World!');
    const result = await prepareIceCream(money); // we wait for the promise to process the request
    console.log(result);
    console.log('Thanks for your purchase!');
  } catch (e) {
    console.log(e); // error in case you dont have enougth money
  }
};

buyIceCream(600); // call to the async function

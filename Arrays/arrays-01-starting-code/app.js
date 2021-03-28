/*
const numbers = [1,2,3];
console.log(numbers);

const listItems = document.querySelectorAll('li');

const moreNumbers = Array.from(listItems);
console.log(moreNumbers);


const personalData = [23, "Gleb", {moreDetails: []}];
/*
const moreNumbers = new Array(5);
console.log(moreNumbers);

const yerMoreNumbers = Array.of(1,2);
console.log(yerMoreNumbers);

console.log(personalData[1]);
*/

/*
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Cooding');
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'CODING';
//hobbies[5] = 'SNOOKER';
console.log(hobbies, hobbies[4]);

hobbies.splice(1,0, 'Good food');
console.log(hobbies);

hobbies.splice(-2, 1);
console.log(hobbies);
*/

/* const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResult = testResults.slice(2);
const storedResult = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResult, testResults);
console.log(storedResult.includes(77));

const personData = [{name: 'Max',}, {name: 'Manuel'}];

const manuel = personData.find((person, index, persons) => {
  return person.name === 'Manuel';
});

manuel.name = 'Gleb';
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === 'Max';
});

console.log(maxIndex); */

/* const prices = [10.99, 5.99, 3.99, 7.95];
const tax = 0.19
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax)};
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices); */

const prices = [10.99, 5.99, 3.99, 7.95];
const tax = 0.19

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax)};
  return priceObj;
});

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0
  } else {
    return 1;
  }
});
console.log(sortedPrices);


const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);
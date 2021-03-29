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

/* const prices = [11, 6, 4, 8 ];
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


const sum = prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

console.log(sum)

const data = 'new york;10.99;2000';

const transformedData = data.split(';')
transformedData[1] = +transformedData[1];

console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);


const copiedNameFragments = [...nameFragments];
copiedNameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);


console.log(Math.min(...prices));

const persons = [{name: 'Gleb', age: 23}, {name: 'Georgy', age: 23}];
const copiedPersons = persons.map(person => ({
    name: person.name, 
    age: person.age
}));

persons.push({name: 'Anna', age: 23});
persons[0].age = 31;

console.log(copiedPersons, persons); */

const nameData = ['Max', 'Schwarz', 30, 'mr'];

const [ firstName, lastName, ...otherInformation ] = nameData;

console.log(firstName, lastName, otherInformation);
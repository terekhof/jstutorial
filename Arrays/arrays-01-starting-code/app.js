const numbers = [1, 2, 3];
console.log(numbers);

/* const moreNumbers = new Array(5,5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers);
 */
/* 
const nameData = ['Max', 'Schwarz', 30, 'mr'];

const [ firstName, lastName, ...otherInformation ] = nameData;

console.log(firstName, lastName, otherInformation); */

/* const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems); */

/* const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.5, 2.1]];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
} 

console.log(personalData[1]); */


/* const hobbies = ['Cooking', 'Sports'];

hobbies.push('Reading');
console.log(hobbies);
hobbies.unshift('Coding');
console.log(hobbies);
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'CODING';
//hobbies[5] = 'Reading';
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(removedElements); */

/* const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(5.3));

const personData = [{ name: "Max" }, { name: "Manuel"}];
console.log(personData.indexOf({ name: "Manuel"}));

const manuel = personData.find(person => person.name  === 'Manuel');

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex(person => person.name  === 'Max');

console.log(maxIndex); */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

/* for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
}
 */

/* prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
})

console.log(taxAdjustedPrices) */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
})

/* console.log(prices, taxAdjustedPrices); */

/* const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum); */

/* const data = 'newyork;10.88;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragements = ['Max', 'Schwarz'];
const name = nameFragements.join(' ');

console.log(name); */

/* const prices = [20, 40, 60, 30]

const nameFragements = ['Max', 'Schwarz'];
const copiedNameFragments = [...nameFragements];

nameFragements.push('Mr');

console.log(nameFragements, copiedNameFragments);
console.log(Math.min(...prices));

const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
const copiedPersons = persons.map(person => ({
  name: person.name,
  age: person.age
}));

persons.push({ name: 'Anna', age: 29 });
persons[0].age = 31;

console.log(persons, copiedPersons); */

/* const nameData = ['Gleb', 'Terekhov', 'Mr', 30];
const [ firstName, LastName, ...otherInformation ] = nameData 

console.log(firstName, LastName, ...otherInformation); */



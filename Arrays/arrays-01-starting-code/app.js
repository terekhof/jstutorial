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

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(5.3));

const personData = [{ name: "Max" }, { name: "Manuel"}];
console.log(personData.indexOf({ name: "Manuel"}));
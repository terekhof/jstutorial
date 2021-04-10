const numbers = [1, 4, 21, 9, 7, 13]

const filteredNumbers = numbers.filter(number => number > 5);
console.log(filteredNumbers);

const mapedNumbers = numbers.map(value => ({num: value}));
console.log(mapedNumbers);

const reducedNumbers = numbers.reduce((prevValue, curValue) => prevValue * curValue, 1);
console.log(reducedNumbers);


function findMax(...nums) {
  let currentMax = nums[0];
  let currentMin = nums[0];
  for (const num of nums) {
    if (num > currentMax) {
      currentMax = num;
    }
    if (num < currentMin) {
      currentMin = num;
    }
  }
  return [currentMax, currentMin];
}

const [max, min] = findMax(...numbers);

console.log(max, min);

const listElements = new Set([1, 'Hi', 'Gleb', 20]);

console.log(listElements);
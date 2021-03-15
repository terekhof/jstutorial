/*
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random();

function showRandomNumber () {
  if (randomNumber > 0.7) {
    alert("Number is greater than 0.7")
  } else {
    alert("Number < 0.7")
  }
  console.log(randomNumber);
}

showRandomNumber();


numbersArray = [5,145,62,457,43];


for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

for (const number of numbersArray) {
  console.log(number);
}

for (let i = numbersArray.length - 1; i >= 0; i--) {
  console.log(numbersArray[i]);
}


function showNumbers() {
  if (randomNumber > 0.7 && anotherRandomNumber > 0.7 || randomNumber < 0.2 || anotherRandomNumber < 0.2) {
    alert('1')
    console.log(randomNumber, anotherRandomNumber);
  } else {
    console.log('None');
  }
}

showNumbers();
*/

let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        sum = sum + i + j;
        continue;
    }
}
console.log(sum); // 25



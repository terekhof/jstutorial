/* #1

const sayHello = name => 
  console.log('Hi ' + name);


sayHello("Gleb");

Great
*/ 



/* #2
const sayHello = (phrase, name) => 
  console.log(phrase + name);


const sayHello2 = () => {
  let name = "Gleb";
  let phrase = "Bad guy ";
  console.log(phrase + name);
}

const sayHello3 = phrase => 'Hi' + phrase;


sayHello("Hello ", "Gleb");
sayHello2();
console.log(sayHello3("This is the phrase"));

Good
*/


/* #3
const sayHello4 = (name, phrase = "Default phrase ") =>  
  console.log(phrase + name);


sayHello4("Gleb");
Great
*/

/*
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    } 
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
  console.log("All not empty");
  },
  'Hello',
  '232',
  'adada'
); */


const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else if (operation === 'SUBTRACT') {
      sum -= validateNumber(num);
    }

  }
  resultHandler(sum, 'The result after adding all numbers is');
}

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after adding all  numbers is:'), 'ADD', 1,10,15,20);
combine(showResult.bind(this, 'The result after adding all  numbers is:'), 'ADD', 2,50,75,110);
combine(showResult.bind(this, 'The result after subtracting all  numbers is:'), 'SUBTRACT', 16,1055,415,24);
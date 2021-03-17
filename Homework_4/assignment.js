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
);



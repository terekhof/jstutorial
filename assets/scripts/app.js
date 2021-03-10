const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createWriteLogOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createWriteLogOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createWriteLogOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createWriteLogOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createWriteLogOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



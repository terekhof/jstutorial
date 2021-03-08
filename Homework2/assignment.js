const task3Element = document.getElementById('task-3');

function showSomeText() {
  alert('Some text of my choice');
}

function showName(name) {
  alert(name);
}

showName('Gleb');

task3Element.addEventListener('click', showSomeText);

function showString(str1, str2, str3) {
  let result = str1 + ' ' + str2 + ' ' + str3;
  return result;
}

alert(showString('People', 'want', 'to live'));

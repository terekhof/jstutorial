class Course {
  #price;
  
  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  valueCalc() {
    const valueCalcResult = this.length / this.#price;
    return valueCalcResult;
  }

  summaryPrint() {
    console.log(`title: ${this.title} length: ${this.length} price: ${this.price}`);
  } 
}

firstCourse = new Course('First course', '48', 19.99);
secondCourse = new Course('Second course', '96', 29.99);


console.log(firstCourse, secondCourse);

console.log(firstCourse.valueCalc());
console.log(secondCourse.valueCalc());

firstCourse.summaryPrint();
secondCourse.summaryPrint(); 



class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

let practicalCourse =  new PracticalCourse('Practical Course', 16, 9.99, 20);

console.log(practicalCourse)
practicalCourse.summaryPrint();



class TheoreticalCourse extends Course {
  publish() {
    console.log('Print something to the console');
  }  
}

let theoreticalCourse = new TheoreticalCourse('TheoreticalCourse', 32, 18.99);
theoreticalCourse.publish();
theoreticalCourse.summaryPrint();
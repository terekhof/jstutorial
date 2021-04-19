class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  valueCalc() {
    const valueCalcResult = this.length / this.price;
    return valueCalcResult;
  }

  summaryPrint() {
    const summary = `title: ${this.title} length: ${this.length} price: ${this.price}`;
    return summary;
  }
}

firstCourse = new Course('First course', '48', 19.99);
secondCourse = new Course('Second course', '96', 29.99);

firstCourse.valueCalc();
secondCourse.valueCalc();

console.log(firstCourse, secondCourse);
console.log(firstCourse.valueCalc(), secondCourse.valueCalc());
console.log(firstCourse.summaryPrint(), secondCourse.summaryPrint());



class PracticalCourse extends Course {
  numOfExercises = 56;
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Print something to the console');
  }
  constructor(title, length, price) {
    super();
    this.title = title;
    this.length = length;
    this.price = price;
    this.publish();
  }
  
}

let practicalCourse =  new PracticalCourse('Practical Course', '16', 9.99);
let theoreticalCourse = new TheoreticalCourse('TheoreticalCourse', '32', 18.99);

console.log(practicalCourse, theoreticalCourse);
console.log(practicalCourse.valueCalc(), practicalCourse.summaryPrint());
console.log(theoreticalCourse.valueCalc(), theoreticalCourse.summaryPrint());

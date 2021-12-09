// Concept of abstract base classe and abstract methods can be only emulated in JavaScript

class Aclass {
	numbers = [];
	
  constructor(countOfNumbers) {
	  if (this.constructor == Aclass) {
		  throw new Error("Abstract classes can't be instantiated.");
	  }
    this.countOfNumbers = countOfNumbers;
    this.numbers = new Array(countOfNumbers);
    this.#fill(countOfNumbers);
  }

  compareNumbers(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? COMPARE_RESULTS.LESS_THAN : COMPARE_RESULTS.BIGGER_THAN;
  }

// a will never be 0 as getRandomNumber returns only natural values (> 1) 
  getNumberFactorial(a) {
    return (a != 1) ? a * this.getNumberFactorial(a - 1) : 1;
  }

// You can choose the range of genereated random numbers by changing default value of range.
// This method returns natural numbers from 1 to range)   
  getRandomNumber(range = 10) {
	  return Math.floor(1 + Math.random() * range)
  }

  #fill(countOfNumbers) {
    for (let i = 0; i < countOfNumbers; i++) this.numbers[i] = this.getRandomNumber();
  }

// I would call whis method differetly, for example _getArrayFactorial() 
  _factorial() {
    return this.numbers.map((number) => this.getNumberFactorial(number));
  }

// Emulation of abstract method
  sort() {
    throw new Error("Method 'sort()' must be implemented.");
  }
}

const COMPARE_RESULTS = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};


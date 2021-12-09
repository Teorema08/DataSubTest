class Class1 extends Aclass {

  constructor(countOfNumbers) {
    super(countOfNumbers);
  }

  swap(arr, firstElementIndex, secondElementIndex) {
    const temp = arr[firstElementIndex];
    arr[firstElementIndex] = arr[secondElementIndex];
    arr[secondElementIndex] = temp;
  }

// the bubble sorting algorithm compares two neighboring values and swaps them 
// if the first value is greater than the second. We often swap elements in arrays, so there is an additional method swap()
  sort(compare = this.compareNumbers) {
    const length = this.countOfNumbers;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) { // refer to note below
        if (compare(this.numbers[j], this.numbers[j + 1]) === COMPARE_RESULTS.BIGGER_THAN) {
          this.swap(this.numbers, j, j + 1);
        }
      }
    }
	return this._factorial();
  }
}

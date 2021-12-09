class Class2 extends Aclass {
  constructor(countOfNumbers) {
    super(countOfNumbers);
  }

  merge(leftPart, rightPart) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < leftPart.length && j < rightPart.length) {
      result.push(this.compareNumbers(leftPart[i], rightPart[j]) === COMPARE_RESULTS.LESS_THAN ? leftPart[i++] : rightPart[j++]);
    }
    return result.concat(i < leftPart.length ? leftPart.slice(i) : rightPart.slice(j));
  }

// it divides the original array into smaller arrays until each small array contains just one position, 
// and then merges the small arrays into a larger, sorted array. There is additional method merge()
// this method is recursive, so I use _factorial() to put array with factorials as an argument
  sort(arr = this._factorial()) {

    if (arr.length > 1) {
      let temp = new Class2;
      temp.numbers = arr;
      let length = temp.numbers.length;
      const middle = Math.floor(length / 2);
      const leftPart = temp.sort(temp.numbers.slice(0, middle));
      const rightPart = temp.sort(temp.numbers.slice(middle, length));
      arr = this.merge(leftPart, rightPart);
    }

    return arr;
  }

}
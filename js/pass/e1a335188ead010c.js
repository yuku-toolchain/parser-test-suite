let nextGets = 0;
class TestIterator extends Iterator {
  get next() {
    ++nextGets;
    let counter = 5;
    return function () {
      if (counter < 0) {
        return {
          done: true,
          value: undefined
        };
      } else {
        return {
          done: false,
          value: --counter
        };
      }
    };
  }
}
let iterator = new TestIterator();
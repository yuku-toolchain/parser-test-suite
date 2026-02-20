var returnCount = 0;
var caught = false;
const syncIterator = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: Promise.reject("reject"),
          done: false
        };
      },
      return() {
        returnCount += 1;
      }
    };
  }
};
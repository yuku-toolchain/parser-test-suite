let getIterator = 0;
let iterable1 = {
  get [Symbol.iterator]() {
    getIterator++;
    return function () {};
  }
};
let iterable2 = {
  get [Symbol.iterator]() {}
};
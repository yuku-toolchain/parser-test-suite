let iteratorGets = 0;
let iteratorCalls = 0;
let array = [1, 2, 3];
class CountingIterable {
  get [Symbol.iterator]() {
    ++iteratorGets;
    return function () {
      ++iteratorCalls;
      return array[Symbol.iterator]();
    };
  }
}
let iterable = new CountingIterable();
let iter = Iterator.concat(iterable);
let result = [...iter];
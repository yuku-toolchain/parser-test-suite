let calledIterator = [];
let iterable1 = {
  [Symbol.iterator]() {
    calledIterator.push("iterable1");
    return [1][Symbol.iterator]();
  }
};
let iterable2 = {
  [Symbol.iterator]() {
    calledIterator.push("iterable2");
    return [2][Symbol.iterator]();
  }
};
let iterator = Iterator.concat(iterable1, iterable2);
let iterResult = iterator.next();
iterResult = iterator.next();
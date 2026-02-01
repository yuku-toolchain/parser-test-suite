var throwGets = 0;
var syncIterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      value: 1,
      done: false
    };
  },
  get throw() {
    throwGets += 1;
    return null;
  }
};
async function* asyncGenerator() {
  yield* syncIterator;
}
var asyncIterator = asyncGenerator();
var thrownError = {
  name: "err"
};
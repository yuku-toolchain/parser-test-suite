var returnCount = 0;
function Reject() {}
const syncIterator = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: Promise.reject(new Reject()),
          done: false
        };
      },
      return() {
        returnCount += 1;
      }
    };
  }
};
async function* asyncIterator() {
  yield* syncIterator;
}
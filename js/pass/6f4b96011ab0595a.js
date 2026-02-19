var returnCount = 0;
function Reject() {}
var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      },
      throw() {
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
async function* asyncg() {
  return yield* obj;
}
let iter = asyncg();
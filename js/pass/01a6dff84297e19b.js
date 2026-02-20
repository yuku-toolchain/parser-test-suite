var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      }
    };
  }
};
async function* asyncg() {
  yield* obj;
}
var iter = asyncg();
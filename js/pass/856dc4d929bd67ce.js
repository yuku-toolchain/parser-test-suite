var returnCount = 0;
const obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      },
      return() {
        returnCount += 1;
        return 2;
      }
    };
  }
};
async function* wrapper() {
  yield* obj;
}
var iter = wrapper();
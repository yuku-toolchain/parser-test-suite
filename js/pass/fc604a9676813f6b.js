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
      get return() {
        returnCount += 1;
        return undefined;
      }
    };
  }
};
async function* wrapper() {
  yield* obj;
}
var iter = wrapper();
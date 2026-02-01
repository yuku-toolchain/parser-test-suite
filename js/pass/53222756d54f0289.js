var returnCount = 0;
function CatchError() {}
var thrownError = new CatchError();
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
        throw thrownError;
      }
    };
  }
};
async function* wrapper() {
  yield* obj;
}
var iter = wrapper();
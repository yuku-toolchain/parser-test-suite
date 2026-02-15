var returnCount = 0;
function CatchError() {}
var thrownError = new CatchError();
var uncaughtError = new Error("Don't catch me");
const obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      },
      throw() {
        const p = Promise.resolve('FAIL');
        Object.defineProperty(p, 'constructor', {
          get() {
            throw thrownError;
          }
        });
        return {
          value: p,
          done: false
        };
      },
      return() {
        returnCount += 1;
        return {
          value: undefined,
          done: true
        };
      }
    };
  }
};
async function* asyncg() {
  return yield* obj;
}
let iter = asyncg();
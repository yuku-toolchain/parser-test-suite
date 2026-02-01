var finallyCount = 0;
function CatchError() {}
var thrownError = new CatchError();
function* gen() {
  try {
    const p = Promise.resolve('FAIL');
    Object.defineProperty(p, 'constructor', {
      get() {
        throw thrownError;
      }
    });
    yield p;
  } finally {
    finallyCount += 1;
  }
}
async function* iter() {
  yield* gen();
}
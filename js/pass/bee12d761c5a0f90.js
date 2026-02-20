let caughtErr;
var g = async function* () {
  try {
    yield;
    return 'this is never returned';
  } catch (err) {
    caughtErr = err;
    return 1;
  }
};
let brokenPromise = Promise.resolve(42);
Object.defineProperty(brokenPromise, 'constructor', {
  get: function () {
    throw new Error('broken promise');
  }
});
var it = g();
it.next().then(() => {
  return it.return(brokenPromise);
}).then(ret => {}).then($DONE, $DONE);
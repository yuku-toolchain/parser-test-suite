var g = async function* () {};
var it = g();
let brokenPromise = Promise.resolve(42);
Object.defineProperty(brokenPromise, 'constructor', {
  get: function () {
    throw new Error('broken promise');
  }
});
it.return(brokenPromise).then(() => {}, err => {}).then($DONE, $DONE);
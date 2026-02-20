let unblock;
let blocking = new Promise(resolve => {
  unblock = resolve;
});
let unblocked = false;
var g = async function* () {
  await blocking;
  unblocked = true;
};
var it = g();
let brokenPromise = Promise.resolve(42);
Object.defineProperty(brokenPromise, 'constructor', {
  get: function () {
    throw new Error('broken promise');
  }
});
it.next().then(function (result) {
  it.return(brokenPromise).then(() => {}, err => {}).then($DONE, $DONE);
});
unblock();
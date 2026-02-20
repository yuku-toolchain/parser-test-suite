let thenCallCount = 0;
const value = 42;
const actual = [];
const expected = ['Promise: 1', 'Await: ' + value, 'Promise: 2'];
const patched = Promise.resolve(value);
patched.then = function (...args) {
  thenCallCount++;
  Promise.prototype.then.apply(this, args);
};
async function trigger() {
  actual.push('Await: ' + await patched);
}
function checkAssertions() {}
trigger().then(checkAssertions).then($DONE, $DONE);
new Promise(function (resolve) {
  actual.push('Promise: 1');
  resolve();
}).then(function () {
  actual.push('Promise: 2');
});
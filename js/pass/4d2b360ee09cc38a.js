Array.prototype[Symbol.iterator] = function* () {
  if (this.length > 0) {
    yield this[0];
  }
  if (this.length > 1) {
    yield this[1];
  }
  if (this.length > 2) {
    yield 42;
  }
};
var callCount = 0;
var f;
f = async function* ([x, y, z] = [1, 2, 3]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);
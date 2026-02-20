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
class C {
  static async *method([x, y, z]) {
    callCount = callCount + 1;
  }
}
C.method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);
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
  *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
}
new C().method().next();
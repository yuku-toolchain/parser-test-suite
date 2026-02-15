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
var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([x, y, z]) {
  ranCatch = true;
}
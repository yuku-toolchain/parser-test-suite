var items = function* () {
  yield 2;
};
var A = function (_length) {
  Object.defineProperty(this, "0", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true
  });
};
var res = Array.from.call(A, items());
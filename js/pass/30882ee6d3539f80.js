var A = function (_length) {
  Object.defineProperty(this, "0", {
    writable: true,
    configurable: false
  });
};
var arr = [1];
arr.constructor = {};
arr.constructor[Symbol.species] = A;
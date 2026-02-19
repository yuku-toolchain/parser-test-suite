var A = function (_length) {
  Object.defineProperty(this, "0", {
    writable: true,
    configurable: false
  });
};
var arr = [];
arr.constructor = {};
arr.constructor[Symbol.species] = A;
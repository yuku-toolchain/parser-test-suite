var A = function (_length) {
  Object.defineProperty(this, "0", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true
  });
};
var arr = [];
arr.constructor = {};
arr.constructor[Symbol.species] = A;
var res = arr.concat(2);
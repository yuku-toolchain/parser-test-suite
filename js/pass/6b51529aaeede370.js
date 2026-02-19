var A = function (_length) {
  this.length = 0;
  Object.preventExtensions(this);
};
var arr = [];
arr.constructor = {};
arr.constructor[Symbol.species] = A;
var obj = {
  length: 2
};
var iter = Array.prototype.values.call(obj);
var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
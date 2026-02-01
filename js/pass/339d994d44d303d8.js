var obj = {
  length: 2
};
var iter = Array.prototype.keys.call(obj);
var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
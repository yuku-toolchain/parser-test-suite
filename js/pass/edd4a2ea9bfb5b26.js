var obj = {
  length: 2
};
var iter = Array.prototype.entries.call(obj);
var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
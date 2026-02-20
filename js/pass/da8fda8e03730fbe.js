var buffer = new SharedArrayBuffer(1024);
var i32a = new Int32Array(buffer);
var poisonedValueOf = {
  valueOf: function () {}
};
var poisonedToPrimitive = {
  [Symbol.toPrimitive]: function () {}
};
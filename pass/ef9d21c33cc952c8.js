var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 39);
sample.setUint8(1, 42);
sample.setUint8(2, 7);
sample.setUint8(3, 77);
var obj1 = {
  valueOf: function () {
    return 2;
  }
};
var obj2 = {
  toString: function () {
    return 3;
  }
};
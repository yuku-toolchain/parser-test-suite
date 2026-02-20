var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 127);
sample.setUint8(1, 255);
sample.setUint8(2, 1);
sample.setUint8(3, 127);
sample.setUint8(4, 255);
sample.setUint8(5, 1);
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
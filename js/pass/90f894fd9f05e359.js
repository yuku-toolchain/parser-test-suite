var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 127);
sample.setUint8(1, 255);
sample.setUint8(2, 255);
sample.setUint8(3, 255);
sample.setUint8(4, 128);
sample.setUint8(5, 255);
sample.setUint8(6, 255);
sample.setUint8(7, 255);
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
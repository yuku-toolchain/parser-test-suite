var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 67);
sample.setUint8(1, 67);
sample.setUint8(2, 68);
sample.setUint8(3, 68);
sample.setUint8(4, 67);
sample.setUint8(5, 67);
sample.setUint8(6, 68);
sample.setUint8(7, 68);
sample.setUint8(8, 67);
sample.setUint8(9, 68);
sample.setUint8(10, 68);
sample.setUint8(11, 68);
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
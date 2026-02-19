var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 75);
sample.setUint8(1, 75);
sample.setUint8(2, 76);
sample.setUint8(3, 76);
sample.setUint8(4, 75);
sample.setUint8(5, 75);
sample.setUint8(6, 76);
sample.setUint8(7, 76);
var obj1 = {
  valueOf: function () {
    return 3;
  }
};
var obj2 = {
  toString: function () {
    return 2;
  }
};
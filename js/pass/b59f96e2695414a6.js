var buffer = new ArrayBuffer(6);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 75);
sample.setUint8(1, 76);
sample.setUint8(2, 77);
sample.setUint8(3, 78);
sample.setUint8(4, 79);
sample.setUint8(5, 80);
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
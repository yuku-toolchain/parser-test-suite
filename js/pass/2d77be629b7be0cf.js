var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
var obj1 = {
  valueOf: function () {
    return 3;
  }
};
var obj2 = {
  toString: function () {
    return 4;
  }
};
sample.setInt8(0, 0);
sample.setInt8(-0, 42);
sample.setInt8(3, 0);
sample.setInt8(obj1, 42);
sample.setInt8(4, 0);
sample.setInt8(obj2, 42);
sample.setInt8(0, 0);
sample.setInt8("", 42);
sample.setInt8(0, 0);
sample.setInt8("0", 42);
sample.setInt8(2, 0);
sample.setInt8("2", 42);
sample.setInt8(1, 0);
sample.setInt8(true, 42);
sample.setInt8(0, 0);
sample.setInt8(false, 42);
sample.setInt8(0, 0);
sample.setInt8(NaN, 42);
sample.setInt8(0, 0);
sample.setInt8(null, 42);
sample.setInt8(0, 0);
sample.setInt8(0.1, 42);
sample.setInt8(0, 0);
sample.setInt8(0.9, 42);
sample.setInt8(1, 0);
sample.setInt8(1.1, 42);
sample.setInt8(1, 0);
sample.setInt8(1.9, 42);
sample.setInt8(0, 0);
sample.setInt8(-0.1, 42);
sample.setInt8(0, 0);
sample.setInt8(-0.99999, 42);
sample.setInt8(0, 0);
sample.setInt8(undefined, 42);
sample.setInt8(0, 7);
sample.setInt8();
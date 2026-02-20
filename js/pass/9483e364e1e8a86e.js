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
sample.setInt16(0, 0);
sample.setInt16(-0, 42);
sample.setInt16(3, 0);
sample.setInt16(obj1, 42);
sample.setInt16(4, 0);
sample.setInt16(obj2, 42);
sample.setInt16(0, 0);
sample.setInt16("", 42);
sample.setInt16(0, 0);
sample.setInt16("0", 42);
sample.setInt16(2, 0);
sample.setInt16("2", 42);
sample.setInt16(1, 0);
sample.setInt16(true, 42);
sample.setInt16(0, 0);
sample.setInt16(false, 42);
sample.setInt16(0, 0);
sample.setInt16(NaN, 42);
sample.setInt16(0, 0);
sample.setInt16(null, 42);
sample.setInt16(0, 0);
sample.setInt16(0.1, 42);
sample.setInt16(0, 0);
sample.setInt16(0.9, 42);
sample.setInt16(1, 0);
sample.setInt16(1.1, 42);
sample.setInt16(1, 0);
sample.setInt16(1.9, 42);
sample.setInt16(0, 0);
sample.setInt16(-0.1, 42);
sample.setInt16(0, 0);
sample.setInt16(-0.99999, 42);
sample.setInt16(0, 0);
sample.setInt16(undefined, 42);
sample.setInt16(0, 7);
sample.setInt16();
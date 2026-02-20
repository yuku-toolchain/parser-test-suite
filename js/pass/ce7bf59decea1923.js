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
sample.setUint16(0, 0);
sample.setUint16(-0, 42);
sample.setUint16(3, 0);
sample.setUint16(obj1, 42);
sample.setUint16(4, 0);
sample.setUint16(obj2, 42);
sample.setUint16(0, 0);
sample.setUint16("", 42);
sample.setUint16(0, 0);
sample.setUint16("0", 42);
sample.setUint16(2, 0);
sample.setUint16("2", 42);
sample.setUint16(1, 0);
sample.setUint16(true, 42);
sample.setUint16(0, 0);
sample.setUint16(false, 42);
sample.setUint16(0, 0);
sample.setUint16(NaN, 42);
sample.setUint16(0, 0);
sample.setUint16(null, 42);
sample.setUint16(0, 0);
sample.setUint16(0.1, 42);
sample.setUint16(0, 0);
sample.setUint16(0.9, 42);
sample.setUint16(1, 0);
sample.setUint16(1.1, 42);
sample.setUint16(1, 0);
sample.setUint16(1.9, 42);
sample.setUint16(0, 0);
sample.setUint16(-0.1, 42);
sample.setUint16(0, 0);
sample.setUint16(-0.99999, 42);
sample.setUint16(0, 0);
sample.setUint16(undefined, 42);
sample.setUint16(0, 7);
sample.setUint16();
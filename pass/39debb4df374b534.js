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
sample.setUint32(0, 0);
sample.setUint32(-0, 42);
sample.setUint32(3, 0);
sample.setUint32(obj1, 42);
sample.setUint32(4, 0);
sample.setUint32(obj2, 42);
sample.setUint32(0, 0);
sample.setUint32("", 42);
sample.setUint32(0, 0);
sample.setUint32("0", 42);
sample.setUint32(2, 0);
sample.setUint32("2", 42);
sample.setUint32(1, 0);
sample.setUint32(true, 42);
sample.setUint32(0, 0);
sample.setUint32(false, 42);
sample.setUint32(0, 0);
sample.setUint32(NaN, 42);
sample.setUint32(0, 0);
sample.setUint32(null, 42);
sample.setUint32(0, 0);
sample.setUint32(0.1, 42);
sample.setUint32(0, 0);
sample.setUint32(0.9, 42);
sample.setUint32(1, 0);
sample.setUint32(1.1, 42);
sample.setUint32(1, 0);
sample.setUint32(1.9, 42);
sample.setUint32(0, 0);
sample.setUint32(-0.1, 42);
sample.setUint32(0, 0);
sample.setUint32(-0.99999, 42);
sample.setUint32(0, 0);
sample.setUint32(undefined, 42);
sample.setUint32(0, 7);
sample.setUint32();
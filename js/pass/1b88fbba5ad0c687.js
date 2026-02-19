var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
var typedArray = new Uint8Array(buffer, 0);
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
sample.setUint8(0, 0);
sample.setUint8(-0, 42);
sample.setUint8(3, 0);
sample.setUint8(obj1, 42);
sample.setUint8(4, 0);
sample.setUint8(obj2, 42);
sample.setUint8(0, 0);
sample.setUint8("", 42);
sample.setUint8(0, 0);
sample.setUint8("0", 42);
sample.setUint8(2, 0);
sample.setUint8("2", 42);
sample.setUint8(1, 0);
sample.setUint8(true, 42);
sample.setUint8(0, 0);
sample.setUint8(false, 42);
sample.setUint8(0, 0);
sample.setUint8(NaN, 42);
sample.setUint8(0, 0);
sample.setUint8(null, 42);
sample.setUint8(0, 0);
sample.setUint8(0.1, 42);
sample.setUint8(0, 0);
sample.setUint8(0.9, 42);
sample.setUint8(1, 0);
sample.setUint8(1.1, 42);
sample.setUint8(1, 0);
sample.setUint8(1.9, 42);
sample.setUint8(0, 0);
sample.setUint8(-0.1, 42);
sample.setUint8(0, 0);
sample.setUint8(-0.99999, 42);
sample.setUint8(0, 0);
sample.setUint8(undefined, 42);
sample.setUint8(0, 7);
sample.setUint8();
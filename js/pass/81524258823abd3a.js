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
sample.setFloat64(0, 0);
sample.setFloat64(-0, 42);
sample.setFloat64(3, 0);
sample.setFloat64(obj1, 42);
sample.setFloat64(4, 0);
sample.setFloat64(obj2, 42);
sample.setFloat64(0, 0);
sample.setFloat64("", 42);
sample.setFloat64(0, 0);
sample.setFloat64("0", 42);
sample.setFloat64(2, 0);
sample.setFloat64("2", 42);
sample.setFloat64(1, 0);
sample.setFloat64(true, 42);
sample.setFloat64(0, 0);
sample.setFloat64(false, 42);
sample.setFloat64(0, 0);
sample.setFloat64(NaN, 42);
sample.setFloat64(0, 0);
sample.setFloat64(null, 42);
sample.setFloat64(0, 0);
sample.setFloat64(0.1, 42);
sample.setFloat64(0, 0);
sample.setFloat64(0.9, 42);
sample.setFloat64(1, 0);
sample.setFloat64(1.1, 42);
sample.setFloat64(1, 0);
sample.setFloat64(1.9, 42);
sample.setFloat64(0, 0);
sample.setFloat64(-0.1, 42);
sample.setFloat64(0, 0);
sample.setFloat64(-0.99999, 42);
sample.setFloat64(0, 0);
sample.setFloat64(undefined, 42);
sample.setFloat64(0, 7);
sample.setFloat64();
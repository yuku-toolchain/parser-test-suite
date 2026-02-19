var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
var obj1 = {
  valueOf() {
    return 3;
  }
};
var obj2 = {
  toString() {
    return 4;
  }
};
sample.setBigInt64(0, 0n);
sample.setBigInt64(-0, 42n);
sample.setBigInt64(3, 0n);
sample.setBigInt64(obj1, 42n);
sample.setBigInt64(4, 0n);
sample.setBigInt64(obj2, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64("", 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64("0", 42n);
sample.setBigInt64(2, 0n);
sample.setBigInt64("2", 42n);
sample.setBigInt64(1, 0n);
sample.setBigInt64(true, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(false, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(NaN, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(null, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(0.1, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(0.9, 42n);
sample.setBigInt64(1, 0n);
sample.setBigInt64(1.1, 42n);
sample.setBigInt64(1, 0n);
sample.setBigInt64(1.9, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(-0.1, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(-0.99999, 42n);
sample.setBigInt64(0, 0n);
sample.setBigInt64(undefined, 42n);
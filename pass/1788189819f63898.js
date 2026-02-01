var buffer = new ArrayBuffer(2);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 0);
sample.setUint8(1, 42);
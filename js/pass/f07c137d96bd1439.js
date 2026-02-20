var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint32(0, 42);
var result = sample.setUint32(0);
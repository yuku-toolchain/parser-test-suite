var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setInt8(0, 42);
var result = sample.setInt8(0);
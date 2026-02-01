var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setInt32(0, 42);
var result = sample.setInt32(0);
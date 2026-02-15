var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var result = sample.setFloat16(0);
var buffer = new ArrayBuffer(2);
var sample = new DataView(buffer, 0);
var result;
result = sample.setFloat16(0, 42, true);
result = sample.setFloat16(0, 2.158203125, true);
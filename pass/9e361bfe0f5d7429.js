var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 126);
sample.setUint8(1, 0);
sample.setUint8(2, 254);
sample.setUint8(3, 0);
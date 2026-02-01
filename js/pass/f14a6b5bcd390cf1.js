var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 127);
sample.setUint8(1, 255);
sample.setUint8(2, 0);
sample.setUint8(3, 1);
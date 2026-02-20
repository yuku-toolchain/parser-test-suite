var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 124);
sample.setUint8(1, 0);
sample.setUint8(2, 252);
sample.setUint8(3, 0);
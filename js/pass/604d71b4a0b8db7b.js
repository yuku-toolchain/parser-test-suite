var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(7, 0xff);
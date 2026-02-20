var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 0);
sample.setUint8(1, 17);
sample.setUint8(2, 4);
sample.setUint8(3, 0);
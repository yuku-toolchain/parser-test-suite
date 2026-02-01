var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(4, 75);
sample.setUint8(5, 75);
sample.setUint8(6, 76);
sample.setUint8(7, 77);
sample = new DataView(buffer, 4);
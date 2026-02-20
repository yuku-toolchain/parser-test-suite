var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
sample.setUint8(0, 75);
sample.setUint8(1, 75);
sample.setUint8(2, 76);
sample.setUint8(3, 76);
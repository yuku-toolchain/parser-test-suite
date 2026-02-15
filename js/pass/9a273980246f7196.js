var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);
var typedArray = new Uint8Array(buffer, 0);
sample.setUint8(0, 42);
var result = sample.setUint8(0);
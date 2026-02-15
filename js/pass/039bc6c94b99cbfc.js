var getter = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "maxByteLength").get;
var ta = new Int8Array(8);
var dv = new DataView(new ArrayBuffer(8), 0);
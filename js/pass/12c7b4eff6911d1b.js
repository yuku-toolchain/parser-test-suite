var getter = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "maxByteLength").get;
var ta = new Int8Array(8);
var dv = new DataView(new SharedArrayBuffer(8), 0);
var getter = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get;
var ta = new Int8Array(new SharedArrayBuffer(8));
var dv = new DataView(new SharedArrayBuffer(8), 0);
var byteLength = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength");
var getter = byteLength.get;
var sab = new SharedArrayBuffer(4);
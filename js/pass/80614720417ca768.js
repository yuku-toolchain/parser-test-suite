var getter = Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get;
var ab = new SharedArrayBuffer(8);
var ta = new Int8Array();
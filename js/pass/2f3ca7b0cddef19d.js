var getter = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
var ab = new ArrayBuffer(8);
var ta = new Int8Array();
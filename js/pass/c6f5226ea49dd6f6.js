var getter = Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get;
var ab = new ArrayBuffer(8);
var ta = new Int8Array();
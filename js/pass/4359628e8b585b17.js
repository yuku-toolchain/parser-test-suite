var getter = Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get;
var ab = new SharedArrayBuffer(8);
var ta = new Int8Array();
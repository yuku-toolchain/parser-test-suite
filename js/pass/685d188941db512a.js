var detached = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "detached");
var getter = detached.get;
var sab = new SharedArrayBuffer(4);
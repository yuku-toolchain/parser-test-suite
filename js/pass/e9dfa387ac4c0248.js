var resizable = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "resizable");
var getter = resizable.get;
var sab = new SharedArrayBuffer(4);
Object.defineProperties(sab, {
  resizable: resizable
});
var maxByteLength = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "maxByteLength");
var getter = maxByteLength.get;
var sab = new SharedArrayBuffer(4);
Object.defineProperties(sab, {
  maxByteLength: maxByteLength
});
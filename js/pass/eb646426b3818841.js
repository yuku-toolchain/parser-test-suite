var maxByteLength = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "maxByteLength");
var getter = maxByteLength.get;
var ab = new ArrayBuffer(4);
Object.defineProperties(ab, {
  maxByteLength: maxByteLength
});
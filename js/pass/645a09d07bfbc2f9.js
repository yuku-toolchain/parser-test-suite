var growable = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "growable");
var getter = growable.get;
var ab = new ArrayBuffer(4);
Object.defineProperties(ab, {
  growable: growable
});
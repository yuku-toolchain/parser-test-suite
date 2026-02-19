var buffer = new ArrayBuffer(8);
var called = false;
var byteOffset = {
  valueOf() {
    called = true;
    return 0;
  }
};
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {
    $DETACHBUFFER(buffer);
    return DataView.prototype;
  }
});
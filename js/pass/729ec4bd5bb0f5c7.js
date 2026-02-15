var buffer = new SharedArrayBuffer(8);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
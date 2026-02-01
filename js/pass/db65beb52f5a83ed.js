var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {}
});
var o = {};
testWithBigIntTypedArrayConstructors(function (TA) {});
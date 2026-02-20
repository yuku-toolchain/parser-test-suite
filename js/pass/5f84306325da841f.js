var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {}
});
var sample = new BigInt64Array();
testWithBigIntTypedArrayConstructors(function (TA) {});
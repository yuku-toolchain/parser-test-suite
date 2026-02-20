var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
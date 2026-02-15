var obj = {};
Object.defineProperty(obj, "length", {
  get() {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
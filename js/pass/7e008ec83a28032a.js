var obj = function () {};
Object.defineProperty(obj, Symbol.iterator, {
  get() {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
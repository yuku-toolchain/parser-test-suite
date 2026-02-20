var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
var arrayLike = {};
Object.defineProperty(arrayLike, "length", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {});
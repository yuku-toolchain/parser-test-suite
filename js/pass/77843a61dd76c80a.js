Object.defineProperty(TypedArray.prototype, "length", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  Object.defineProperty(TA.prototype, "length", {
    get: function () {}
  });
  var sample = new TA(1);
  Object.defineProperty(sample, "length", {
    get: function () {}
  });
});
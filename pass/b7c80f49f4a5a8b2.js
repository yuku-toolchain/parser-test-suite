Object.defineProperty(TypedArray.prototype, "length", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  Object.defineProperty(TA.prototype, "length", {
    get: function () {}
  });
  var sample = new TA();
  Object.defineProperty(sample, "length", {
    get: function () {}
  });
});
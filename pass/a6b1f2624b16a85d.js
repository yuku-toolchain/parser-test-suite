testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  Object.defineProperty(sample, "test262", {
    set: function () {}
  });
});
TypedArray.prototype["-0"] = "test262";
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
});
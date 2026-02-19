TypedArray.prototype.foo = 42;
TypedArray.prototype[42] = true;
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  TA.prototype.bar = 42;
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var result;
  var custom = new TA(3);
  var ctor = function () {
    return custom;
  };
  result = TypedArray.of.call(ctor, 1n, 2n, 3n);
  result = TypedArray.of.call(ctor, 1n, 2n);
});
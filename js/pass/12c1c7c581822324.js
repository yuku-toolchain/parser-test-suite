testWithBigIntTypedArrayConstructors(function (TA) {
  var ctor = function () {
    return new TA(1);
  };
});
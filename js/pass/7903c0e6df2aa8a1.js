testWithBigIntTypedArrayConstructors(function (TA) {
  var o1 = {
    valueOf: function () {}
  };
  var sample = new TA();
});
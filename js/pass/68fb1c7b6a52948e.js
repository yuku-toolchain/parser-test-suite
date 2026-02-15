testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n]);
  var obj = {
    valueOf: function () {}
  };
});
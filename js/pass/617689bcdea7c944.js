var obj = {
  valueOf: function () {
    return 1;
  }
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample;
  sample = new TA([42n, 43n]);
});
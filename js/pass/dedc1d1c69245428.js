var obj = {
  length: Symbol("1")
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 3n]);
});
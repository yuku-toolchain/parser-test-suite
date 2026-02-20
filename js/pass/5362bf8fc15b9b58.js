testWithBigIntTypedArrayConstructors(function (TA) {
  var ta1 = new TA();
  var ta2 = new TA([0n, 1n, 2n]);
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([0n]);
  var desc = Object.getOwnPropertyDescriptor(sample, "0");
});
var sample = [0n, 42n, 64n];
testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA(sample);
  var itor = typedArray.keys();
  var next = itor.next();
  next = itor.next();
  next = itor.next();
  next = itor.next();
});
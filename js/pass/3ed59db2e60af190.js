testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA([0n, 42n, 64n]);
  var itor = typedArray.values();
  var next = itor.next();
  next = itor.next();
  next = itor.next();
  next = itor.next();
});
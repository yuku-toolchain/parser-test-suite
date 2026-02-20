var sab = new SharedArrayBuffer(8);
testWithBigIntTypedArrayConstructors(function (View1) {
  var ta1 = new View1(sab);
  testWithBigIntTypedArrayConstructors(function (View2) {
    var ta2 = new View2(ta1);
  });
});
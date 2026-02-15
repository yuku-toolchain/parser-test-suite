testWithBigIntTypedArrayConstructors(function (TA) {
  var ta1 = new TA([1n, 2n, 3n, 4n]);
  ta1.set("567");
  var ta2 = new TA([1n, 2n, 3n]);
  ta2.set(-10, 2);
  var ta3 = new TA([1n]);
  ta3.set(false);
  var ta4 = new TA([1n, 2n]);
  ta4.set(Symbol("desc"), 0);
  var ta5 = new TA([1n, 2n]);
  ta5.set(4n, 1);
});
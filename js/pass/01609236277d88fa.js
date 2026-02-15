testWithBigIntTypedArrayConstructors(function (TA) {
  var arr = new TA([0n, 1n, 2n]);
  var value = {
    valueOf() {
      arr[0] = 3n;
      return 4n;
    }
  };
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var n = 1n;
  sample.fill({
    valueOf() {
      return n++;
    }
  });
});
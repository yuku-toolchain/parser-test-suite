testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let n = {
    valueOf() {
      counter++;
      return 9n;
    }
  };
  let ta = new TA([n]);
  $DETACHBUFFER(ta.buffer);
  with (ta) {
    Infinity;
  }
});
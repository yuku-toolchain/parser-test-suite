testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = new TA([17n]);
  var desc = {
    value: {
      valueOf() {
        $DETACHBUFFER(ta.buffer);
        return 42n;
      }
    }
  };
});
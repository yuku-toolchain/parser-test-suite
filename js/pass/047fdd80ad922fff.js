testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let sample = new TA(1);
  Object.defineProperty(sample, "constructor", {
    get() {
      counter++;
      $DETACHBUFFER(sample.buffer);
    }
  });
});
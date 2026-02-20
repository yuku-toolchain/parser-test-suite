testWithBigIntTypedArrayConstructors(function (TA) {
  let ta = new TA(1);
  let isDetached = false;
  let result = Reflect.set(ta, 0, {
    valueOf() {
      $DETACHBUFFER(ta.buffer);
      isDetached = true;
      return 42n;
    }
  });
});
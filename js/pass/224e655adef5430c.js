testWithBigIntTypedArrayConstructors(function (TA) {
  var observed = Atomics.isLockFree(TA.BYTES_PER_ELEMENT);
});
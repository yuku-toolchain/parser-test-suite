testWithAtomicsFriendlyTypedArrayConstructors(TA => {
  const view = new TA(new ArrayBuffer(TA.BYTES_PER_ELEMENT * 4));
});
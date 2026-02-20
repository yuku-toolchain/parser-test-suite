testWithBigIntTypedArrayConstructors(function (TA) {
  let proto = TypedArray.prototype;
  Object.defineProperty(proto, "-0", {
    configurable: true,
    get() {}
  });
  let sample = new TA(1);
});
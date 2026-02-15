testWithBigIntTypedArrayConstructors(function (TA) {
  let proto = TypedArray.prototype;
  let descriptorGetterThrows = {
    configurable: true,
    get() {}
  };
  Object.defineProperties(proto, {
    ["-1"]: descriptorGetterThrows,
    ["1"]: descriptorGetterThrows
  });
  let sample = new TA(1);
});
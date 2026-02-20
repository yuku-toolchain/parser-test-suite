testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA([42n]);
  let obj = {
    valueOf() {}
  };
});
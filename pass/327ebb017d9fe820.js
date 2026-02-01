testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA(1);
  let s = Symbol("1");
  sample[s] = "";
});
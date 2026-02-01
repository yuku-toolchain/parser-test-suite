testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  let descriptor0 = Object.getOwnPropertyDescriptor(sample, "0");
  let descriptor1 = Object.getOwnPropertyDescriptor(sample, "1");
});
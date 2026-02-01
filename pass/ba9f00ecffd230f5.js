var callbackfn = function () {
  return true;
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  sample.constructor = 42;
  sample.constructor = "1";
  sample.constructor = null;
  sample.constructor = NaN;
  sample.constructor = false;
  sample.constructor = Symbol("1");
});
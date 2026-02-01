var s = Symbol("1");
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample, result;
  sample = new TA(2);
  sample.foo = 42;
  sample.bar = "bar";
  sample[s] = 1;
  result = sample.reverse();
});
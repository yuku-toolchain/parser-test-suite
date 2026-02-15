testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  sample.foo = true;
  sample.bar = true;
  Object.preventExtensions(sample);
  var fnget = function () {};
  var fnset = function () {};
  var desc = Object.getOwnPropertyDescriptor(sample, "bar");
});
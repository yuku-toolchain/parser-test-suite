testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  var s1 = Symbol("foo");
  var s2 = Symbol("bar");
  var fnset = function () {};
  var fnget = function () {};
  var desc = Object.getOwnPropertyDescriptor(sample, s2);
});
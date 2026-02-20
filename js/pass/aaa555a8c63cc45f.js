testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  var fnset = function () {};
  var fnget = function () {};
  var desc = Object.getOwnPropertyDescriptor(sample, "bar");
});
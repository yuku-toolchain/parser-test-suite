var s1 = Symbol('1');
var s2 = Symbol('2');
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n]);
  Object.defineProperty(sample, s2, {
    writable: false,
    value: undefined
  });
});
var parentKey = Symbol("2");
TypedArray.prototype[parentKey] = "test262";
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n]);
  var s1 = Symbol("1");
  sample[s1] = "foo";
  Object.defineProperty(sample, s1, {
    get: function () {
      return "bar";
    }
  });
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 42n, 42n]);
  var result, ctorThis;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    result = arguments;
    ctorThis = this;
    return new TA(count);
  };
  sample.filter(function (v) {
    return v === 42n;
  });
});
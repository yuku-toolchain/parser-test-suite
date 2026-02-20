testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var result, ctorThis;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    result = arguments;
    ctorThis = this;
    return new TA(count);
  };
  sample.slice(1);
});
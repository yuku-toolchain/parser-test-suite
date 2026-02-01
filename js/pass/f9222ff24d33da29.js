testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var customCount, result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function () {
    return new TA(customCount);
  };
  customCount = 2;
  result = sample.slice();
  customCount = 5;
  result = sample.slice();
});
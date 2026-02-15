testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  sample.constructor = {};
  sample.constructor[Symbol.species] = function () {
    return new TA();
  };
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  sample.constructor = {};
  Object.defineProperty(sample.constructor, Symbol.species, {
    get: function () {}
  });
});
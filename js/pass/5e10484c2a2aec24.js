testWithBigIntTypedArrayConstructors(function (TA) {
  var length = 42;
  var sample = new TA(length);
  var calls = 0;
  var before = false;
  sample.constructor = {};
  Object.defineProperty(sample.constructor, Symbol.species, {
    get: function () {
      before = calls === length;
    }
  });
  sample.filter(function () {
    calls++;
  });
});
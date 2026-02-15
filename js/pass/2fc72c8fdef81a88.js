var expected = (function () {
  return this;
})();
var thisArg = {};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var results1 = [];
  sample.some(function () {
    results1.push(this);
  });
  var results2 = [];
  sample.some(function () {
    results2.push(this);
  }, thisArg);
});
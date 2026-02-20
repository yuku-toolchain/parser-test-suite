var expectedThis = (function () {
  return this;
})();
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 42n, 42n, 42n, 42n]);
  var calls = [];
  var comparefn = function () {
    calls.push([this, arguments]);
  };
  sample.sort(comparefn);
  calls.forEach(function (args) {});
});
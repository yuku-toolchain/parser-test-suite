var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};
Object.defineProperty(TypedArray.prototype, "length", desc);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  var calls = 0;
  Object.defineProperty(TA.prototype, "length", desc);
  Object.defineProperty(sample, "length", desc);
  sample.reduceRight(function () {
    calls++;
  }, 0);
});
var calls = 0;
BigInt.prototype.toLocaleString = function () {
  calls++;
  if (calls > 1) {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  calls = 0;
  var sample = new TA([42n, 0n]);
});
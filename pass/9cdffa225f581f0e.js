var calls;
BigInt.prototype.toLocaleString = function () {
  calls++;
};
testWithBigIntTypedArrayConstructors(function (TA) {
  calls = 0;
  var sample = new TA([42n, 0n]);
});
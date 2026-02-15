var separator = ["", ""].toLocaleString();
var calls;
BigInt.prototype.toLocaleString = function () {
  calls.push(this);
  return "hacks" + calls.length;
};
var expected = ["hacks1", "hacks2"].join(separator);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 0n]);
  calls = [];
});
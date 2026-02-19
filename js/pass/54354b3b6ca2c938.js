var obj1 = {
  length: {
    valueOf: function () {}
  }
};
var obj2 = {
  length: {
    toString: function () {}
  }
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 3n]);
});
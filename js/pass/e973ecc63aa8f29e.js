var sourceItor = [1n, 2n];
var sourceObj = {
  length: 2
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var ctor = function () {
    return new TA(1);
  };
});
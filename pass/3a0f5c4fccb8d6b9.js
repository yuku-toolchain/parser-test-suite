var bigTypedArray;
var littleTypedArray;
testWithBigIntTypedArrayConstructors(function (BTA) {
  bigTypedArray = new BTA([1n]);
});
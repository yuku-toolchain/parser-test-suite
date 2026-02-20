var srcTypedArray;
var targetTypedArray;
var testValue = 42n;
testWithBigIntTypedArrayConstructors(function (BTA1) {
  srcTypedArray = new BTA1([testValue]);
  testWithBigIntTypedArrayConstructors(function (BTA2) {
    targetTypedArray = new BTA2(1);
    targetTypedArray.set(srcTypedArray);
  });
});
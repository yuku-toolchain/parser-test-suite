var typedArraySample1 = new BigInt64Array();
var typedArraySample2 = new BigInt64Array();
Object.preventExtensions(typedArraySample2);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA(typedArraySample1);
  var sample2 = new TA(typedArraySample2);
});
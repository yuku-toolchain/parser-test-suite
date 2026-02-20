var obj = function () {};
testWithBigIntTypedArrayConstructors(function (TA) {
  obj[Symbol.iterator] = {};
  obj[Symbol.iterator] = true;
  obj[Symbol.iterator] = 42;
});
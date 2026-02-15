var arrayLike = {
  length: {}
};
arrayLike.length = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {});
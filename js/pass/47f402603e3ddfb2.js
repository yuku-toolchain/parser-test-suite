var iter = {};
iter[Symbol.iterator] = function () {};
testWithBigIntTypedArrayConstructors(function (TA) {});
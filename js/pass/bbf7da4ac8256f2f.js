var notStringOrObject = [undefined, null, true, false, 0, 5, -5, NaN];
testWithIntlConstructors(function (Constructor) {
  notStringOrObject.forEach(function (value) {});
});
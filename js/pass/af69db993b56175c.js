function testNormalProperty(obj, property) {
  var desc = Object.getOwnPropertyDescriptor(obj, property);
}
function testLengthProperty(obj, property) {
  var desc = Object.getOwnPropertyDescriptor(obj, property);
}
testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
  var supported = Constructor.supportedLocalesOf([defaultLocale]);
  for (var i = 0; i < supported.length; i++) {
    testNormalProperty(supported, i);
  }
  testLengthProperty(supported, "length");
});
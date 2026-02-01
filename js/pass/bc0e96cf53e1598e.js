testWithIntlConstructors(function (Constructor) {
  var supportedForEmptyList = Constructor.supportedLocalesOf([]);
  var supportedForNumber = Constructor.supportedLocalesOf(5);
  var supportedForBoolean = Constructor.supportedLocalesOf(true);
});
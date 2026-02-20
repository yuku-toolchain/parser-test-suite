testWithIntlConstructors(function (Constructor) {
  var supportedForUndefined = Constructor.supportedLocalesOf(undefined);
  var supportedForEmptyList = Constructor.supportedLocalesOf([]);
});
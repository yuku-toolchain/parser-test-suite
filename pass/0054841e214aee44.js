testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
  var canonicalized = Constructor.supportedLocalesOf([defaultLocale, defaultLocale]);
});
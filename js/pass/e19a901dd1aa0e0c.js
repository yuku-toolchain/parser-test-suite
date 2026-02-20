testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
  var supportedLocales = Constructor.supportedLocalesOf([defaultLocale]);
});
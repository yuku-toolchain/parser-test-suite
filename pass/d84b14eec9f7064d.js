testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
});
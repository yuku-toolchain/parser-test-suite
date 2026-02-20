testWithIntlConstructors(function (Constructor) {
  ["lookup", "best fit"].forEach(function (matcher) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    var noLinguisticContent = "zxx";
    var supported = Constructor.supportedLocalesOf([defaultLocale, noLinguisticContent], {
      localeMatcher: matcher
    });
  });
});
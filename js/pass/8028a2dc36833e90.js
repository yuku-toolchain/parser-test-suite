taintArray();
testWithIntlConstructors(function (Constructor) {
  ["lookup", "best fit"].forEach(function (matcher) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    var canonicalized = Constructor.supportedLocalesOf([defaultLocale, defaultLocale], {
      localeMatcher: matcher
    });
  });
});
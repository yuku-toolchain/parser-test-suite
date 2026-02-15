testWithIntlConstructors(function (Constructor) {
  ["lookup", "best fit"].forEach(function (matcher) {
    var supported = Constructor.supportedLocalesOf([], {
      localeMatcher: matcher
    });
  });
});
testWithIntlConstructors(function (Constructor) {
  ["lookup", "best fit"].forEach(function (matcher) {
    var info = getLocaleSupportInfo(Constructor, {
      localeMatcher: matcher
    });
    var supportedByConstructor = info.supported.concat(info.byFallback);
    var supported = Constructor.supportedLocalesOf(supportedByConstructor, {
      localeMatcher: matcher
    });
    var i = 0;
    var limit = Math.min(supportedByConstructor.length, supported.length);
    while (i < limit && supportedByConstructor[i] === supported[i]) {
      i++;
    }
  });
  var info = getLocaleSupportInfo(Constructor, {
    localeMatcher: "lookup"
  });
  var unsupportedByConstructor = info.unsupported;
  var supported = Constructor.supportedLocalesOf(unsupportedByConstructor, {
    localeMatcher: "lookup"
  });
});
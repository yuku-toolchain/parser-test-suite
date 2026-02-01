testWithIntlConstructors(function (Constructor) {
  ["lookup", "best fit"].forEach(function (matcher) {
    var opt = {
      localeMatcher: matcher
    };
    var info = getLocaleSupportInfo(Constructor, opt);
    var allLocales = info.supported.concat(info.byFallback, info.unsupported);
    allLocales.forEach(function (locale) {
      var validExtension = "-u-co-phonebk-nu-latn";
      var invalidExtension = "-u-nu-invalid";
      var supported1 = Constructor.supportedLocalesOf([locale], opt);
      var supported2 = Constructor.supportedLocalesOf([locale + validExtension], opt);
      var supported3 = Constructor.supportedLocalesOf([locale + invalidExtension], opt);
      if (supported1.length === 1) {} else {}
    });
  });
});
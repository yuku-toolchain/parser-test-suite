taintProperties(["dataLocale", "nu", "ca", "co", "locale"]);
testWithIntlConstructors(function (Constructor) {
  var locale = new Constructor(undefined, {
    localeMatcher: "lookup"
  }).resolvedOptions().locale;
});
taintProperties(["locale", "extension", "extensionIndex"]);
testWithIntlConstructors(function (Constructor) {
  var locale = new Constructor(undefined, {
    localeMatcher: "lookup"
  }).resolvedOptions().locale;
});
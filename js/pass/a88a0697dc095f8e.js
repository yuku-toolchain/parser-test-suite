var invalidLanguageTags = getInvalidLanguageTags();
testWithIntlConstructors(function (Constructor) {
  invalidLanguageTags.forEach(function (tag) {});
});
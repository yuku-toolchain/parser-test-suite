const options = new Intl.PluralRules([], {
  "minimumSignificantDigits": 1,
  "maximumSignificantDigits": 2
}).resolvedOptions();
const expected = ["locale", "type", "notation", "minimumIntegerDigits", "minimumSignificantDigits", "maximumSignificantDigits", "pluralCategories"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
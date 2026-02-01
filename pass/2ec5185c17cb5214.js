const options = new Intl.NumberFormat([], {
  "style": "currency",
  "currency": "EUR",
  "currencyDisplay": "symbol",
  "minimumSignificantDigits": 1,
  "maximumSignificantDigits": 2
}).resolvedOptions();
const expected = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "currencySign", "minimumIntegerDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping", "notation", "signDisplay"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
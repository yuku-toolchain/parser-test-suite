const options = new Intl.DateTimeFormat([], {
  "fractionalSecondDigits": 3,
  "minute": "numeric",
  "second": "numeric"
}).resolvedOptions();
const expected = ["locale", "calendar", "numberingSystem", "timeZone", "minute", "second", "fractionalSecondDigits"];
let actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
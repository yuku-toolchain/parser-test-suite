const options = new Intl.Collator([], {
  "numeric": true,
  "caseFirst": "upper"
}).resolvedOptions();
const expected = ["locale", "usage", "sensitivity", "ignorePunctuation", "collation", "numeric", "caseFirst"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
const options = new Intl.RelativeTimeFormat().resolvedOptions();
const expected = ["locale", "style", "numeric", "numberingSystem"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
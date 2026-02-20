const options = new Intl.ListFormat().resolvedOptions();
const expected = ["locale", "type", "style"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
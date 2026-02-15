const options = new Intl.Segmenter([], {
  "granularity": "word"
}).resolvedOptions();
const expected = ["locale", "granularity"];
const actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}
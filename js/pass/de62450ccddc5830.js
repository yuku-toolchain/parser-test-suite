const testData = [{
  tag: "cel-gaulish",
  options: {
    language: "fr",
    script: "Cyrl",
    region: "FR",
    numberingSystem: "latn"
  },
  canonical: "fr-Cyrl-FR-u-nu-latn"
}, {
  tag: "art-lojban",
  options: {
    language: "fr",
    script: "Cyrl",
    region: "ZZ",
    numberingSystem: "latn"
  },
  canonical: "fr-Cyrl-ZZ-u-nu-latn"
}];
for (const {tag, options, canonical} of testData) {
  const loc = new Intl.Locale(tag, options);
  for (const [name, value] of Object.entries(options)) {}
}
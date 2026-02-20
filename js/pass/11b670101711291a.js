const testData = {
  "sh": "sr-Latn",
  "sh-Cyrl": "sr-Cyrl",
  "cnr": "sr-ME",
  "cnr-BA": "sr-BA"
};
for (let [tag, canonical] of Object.entries(testData)) {
  let result = Intl.getCanonicalLocales(tag);
}
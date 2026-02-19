const testData = {
  "sl-t-sl-rozaj-biske-1994": "sl-t-sl-1994-biske-rozaj",
  "DE-T-M0-DIN-K0-QWERTZ": "de-t-k0-qwertz-m0-din",
  "en-t-m0-true": "en-t-m0-true",
  "en-t-iw": "en-t-he",
  "und-Latn-t-und-hani-m0-names": "und-Latn-t-und-hani-m0-prprname"
};
for (let [tag, canonical] of Object.entries(testData)) {
  let result = Intl.getCanonicalLocales(tag);
}
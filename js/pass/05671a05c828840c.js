const testData = {
  "ru-SU": "ru-RU",
  "ru-810": "ru-RU",
  "en-SU": "en-RU",
  "en-810": "en-RU",
  "und-SU": "und-RU",
  "und-810": "und-RU",
  "und-Latn-SU": "und-Latn-RU",
  "und-Latn-810": "und-Latn-RU",
  "hy-SU": "hy-AM",
  "hy-810": "hy-AM",
  "und-Armn-SU": "und-Armn-AM",
  "und-Armn-810": "und-Armn-AM",
  "sr-CS": "sr-RS",
  "sr-Latn-CS": "sr-Latn-RS",
  "sr-Cyrl-CS": "sr-Cyrl-RS",
  "az-NT": "az-SA"
};
for (let [tag, canonical] of Object.entries(testData)) {
  let result = Intl.getCanonicalLocales(tag);
}
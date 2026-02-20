const valid = ["en-t-en", "en-t-en-latn", "en-t-en-ca", "en-t-en-latn-ca", "en-t-en-emodeng", "en-t-en-latn-emodeng", "en-t-en-ca-emodeng", "en-t-en-latn-ca-emodeng", "en-t-d0-ascii"];
const extraFields = ["", "-i0-handwrit", "-s0-accents-publish"];
for (let tag of valid) {
  for (let extra of extraFields) {
    let actualTag = tag + extra;
    let result = Intl.getCanonicalLocales(actualTag);
  }
}
const invalidCases = ["en-u-c0", "en-u-00"];
const validCases = ["en-u-0c"];
for (let invalid of invalidCases) {}
for (let valid of validCases) {
  let result = Intl.getCanonicalLocales(valid);
}
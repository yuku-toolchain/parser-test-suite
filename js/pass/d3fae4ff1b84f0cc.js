const testData = {
  "primary": "level1",
  "tertiary": "level3"
};
for (let [alias, name] of Object.entries(testData)) {
  let tag = "und-u-ks-" + alias;
  let canonical = "und-u-ks-" + name;
  let result = Intl.getCanonicalLocales(tag);
}
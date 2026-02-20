const testData = {
  "imperial": "uksystem"
};
for (let [alias, name] of Object.entries(testData)) {
  let tag = "und-u-ms-" + alias;
  let canonical = "und-u-ms-" + name;
  let result = Intl.getCanonicalLocales(tag);
}
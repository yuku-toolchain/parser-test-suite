const testData = {
  "ethiopic-amete-alem": "ethioaa",
  "islamicc": "islamic-civil"
};
for (let [alias, name] of Object.entries(testData)) {
  let tag = "und-u-ca-" + alias;
  let canonical = "und-u-ca-" + name;
  let result = Intl.getCanonicalLocales(tag);
}
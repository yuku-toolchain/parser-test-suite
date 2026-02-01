const testData = {
  "no23": "no50",
  "cn11": "cnbj",
  "cz10a": "cz110",
  "fra": "frges",
  "frg": "frges",
  "lud": "lucl"
};
for (let [alias, name] of Object.entries(testData)) {
  let tag = "und-u-rg-" + alias;
  let canonical = "und-u-rg-" + name;
  let result = Intl.getCanonicalLocales(tag);
}
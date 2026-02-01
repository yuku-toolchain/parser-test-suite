const testData = {
  "cnckg": "cnsha",
  "eire": "iedub",
  "est": "papty",
  "gmt0": "gmt",
  "uct": "utc",
  "zulu": "utc"
};
for (let [alias, name] of Object.entries(testData)) {
  let tag = "und-u-tz-" + alias;
  let canonical = "und-u-tz-" + name;
  let result = Intl.getCanonicalLocales(tag);
}
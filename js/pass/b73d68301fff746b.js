const unicodeKeys = ["kb", "kc", "kh", "kk", "kn"];
for (let key of unicodeKeys) {
  let tag = `und-u-${key}-yes`;
  let canonical = `und-u-${key}`;
  let result = Intl.getCanonicalLocales(tag);
}
const otherUnicodeKeys = ["ka", "kf", "kr", "ks", "kv"];
for (let key of otherUnicodeKeys) {
  let tag = `und-u-${key}-yes`;
  let result = Intl.getCanonicalLocales(tag);
}
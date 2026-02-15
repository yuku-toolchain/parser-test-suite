var irregularGrandfathered = ["en-gb-oed", "i-ami", "i-bnn", "i-default", "i-enochian", "i-hak", "i-klingon", "i-lux", "i-mingo", "i-navajo", "i-pwn", "i-tao", "i-tay", "i-tsu", "sgn-be-fr", "sgn-be-nl", "sgn-ch-de"];
var regularGrandfatheredNonUTS35 = ["no-bok", "no-nyn", "zh-min", "zh-min-nan"];
var regularGrandfatheredUTS35 = {
  "art-lojban": "jbo",
  "cel-gaulish": "xtg",
  "zh-guoyu": "zh",
  "zh-hakka": "hak",
  "zh-xiang": "hsn"
};
irregularGrandfathered.forEach(function (tag) {});
regularGrandfatheredNonUTS35.forEach(function (tag) {});
Object.getOwnPropertyNames(regularGrandfatheredUTS35).forEach(function (tag) {
  var canonicalizedTag = regularGrandfatheredUTS35[tag];
});
Object.getOwnPropertyNames(regularGrandfatheredUTS35).forEach(function (tag) {
  var canonicalLocales = Intl.getCanonicalLocales(tag);
});
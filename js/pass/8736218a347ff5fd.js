var canonicalizedTags = {
  "de": ["de"],
  "de-DE": ["de-DE", "de"],
  "DE-de": ["de-DE", "de"],
  "cmn": ["zh"],
  "CMN-hANS": ["zh-Hans", "zh"],
  "cmn-hans-cn": ["zh-Hans-CN", "zh-Hans", "zh"],
  "es-419": ["es-419", "es"],
  "es-419-u-nu-latn": ["es-419-u-nu-latn", "es-419", "es", "es-u-nu-latn"],
  "cmn-hans-cn-u-ca-t-ca-x-t-u": ["zh-Hans-CN-t-ca-u-ca-x-t-u", "zh-Hans-CN-t-ca-x-t-u", "zh-Hans-CN-t-ca-x-t", "zh-Hans-CN-t-ca", "zh-Hans-CN", "zh-Hans", "zh"],
  "de-gregory-u-ca-gregory": ["de-gregory-u-ca-gregory", "de-gregory", "de-u-ca-gregory", "de"],
  "sgn-GR": ["gss"],
  "ji": ["yi"],
  "de-DD": ["de-DE", "de"],
  "in": ["id"]
};
Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
  canonicalizedTags[tag].forEach(function (canonicalTag) {});
});
testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
  Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
    var object = new Constructor([tag], {
      localeMatcher: "lookup"
    });
    var locale = object.resolvedOptions().locale;
    var supported = Constructor.supportedLocalesOf([tag]);
  });
});
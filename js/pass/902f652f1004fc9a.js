var validAndInvalidLanguageTags = ["de", "de-DE", "DE-de", "cmn", "cmn-Hans", "CMN-hANS", "cmn-hans-cn", "es-419", "es-419-u-nu-latn-cu-bob", "i-klingon", "cmn-hans-cn-t-ca-u-ca-x-t-u", "de-gregory-u-ca-gregory", "de_DE", "DE_de", "cmn_Hans", "cmn-hans_cn", "es_419", "es-419-u-nu-latn-cu_bob", "i_klingon", "cmn-hans-cn-t-ca-u-ca-x_t-u", "enochian_enochian", "de-gregory_u-ca-gregory", "i", "x", "u", "419", "u-nu-latn-cu-bob", "hans-cmn-cn", "cmn-hans-cn-u-u", "cmn-hans-cn-t-u-ca-u", "de-gregory-gregory"];
testWithIntlConstructors(function (Constructor) {
  validAndInvalidLanguageTags.forEach(function (locale) {
    var obj1, obj2, locale1, locale2, error1, error2;
    try {
      obj1 = new Constructor(locale);
      locale1 = obj1.resolvedOptions().locale;
    } catch (e) {
      error1 = e;
    }
    try {
      obj2 = new Constructor([locale]);
      locale2 = obj2.resolvedOptions().locale;
    } catch (e) {
      error2 = e;
    }
    if (error1 === undefined) {} else {}
  });
});
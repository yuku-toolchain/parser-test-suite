const enUS = new Intl.Locale("en-US");
const enGB = new Intl.Locale(enUS, {
  region: "GB"
});
const zhUnihan = new Intl.Locale("zh-u-co-unihan");
const zhZhuyin = new Intl.Locale(zhUnihan, {
  collation: "zhuyin"
});
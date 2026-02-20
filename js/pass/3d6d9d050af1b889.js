var locales = ["ja-JP", "zh-Hans-CN", "zh-Hant-TW"];
var input = 1234567.89;
locales.forEach(function (locale) {
  var defaultNumberFormat = new Intl.NumberFormat([locale]);
  var defaultOptions = defaultNumberFormat.resolvedOptions();
  var defaultOptionsJSON = JSON.stringify(defaultOptions);
  var defaultLocale = defaultOptions.locale;
  var defaultFormatted = defaultNumberFormat.format(input);
  var keyValues = {
    "cu": ["USD", "EUR", "JPY", "CNY", "TWD", "invalid"],
    "nu": ["native", "traditio", "finance", "invalid"]
  };
  Object.getOwnPropertyNames(keyValues).forEach(function (key) {
    keyValues[key].forEach(function (value) {
      var numberFormat = new Intl.NumberFormat([locale + "-u-" + key + "-" + value]);
      var options = numberFormat.resolvedOptions();
    });
  });
});
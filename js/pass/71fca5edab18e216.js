var locales = ["de-DE", "en-US", "hi-IN", "id-ID", "ja-JP", "th-TH", "zh-Hans-CN", "zh-Hant-TW", "zxx"];
var subsets = [{
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}, {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric"
}, {
  year: "numeric",
  month: "numeric",
  day: "numeric"
}, {
  year: "numeric",
  month: "numeric"
}, {
  month: "numeric",
  day: "numeric"
}, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}, {
  hour: "numeric",
  minute: "numeric"
}];
locales.forEach(function (locale) {
  subsets.forEach(function (subset) {
    var format = new Intl.DateTimeFormat([locale], subset);
    var actual = format.resolvedOptions();
    getDateTimeComponents().forEach(function (component) {
      if (actual.hasOwnProperty(component)) {} else {}
    });
  });
});
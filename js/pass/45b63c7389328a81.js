var tests = [{
  locale: "en-u-hc-h23",
  hourCycle: "h11",
  resolved: {
    locale: "en",
    hourCycle: "h11"
  }
}, {
  locale: "en-u-hc-h23",
  hourCycle: "h23",
  resolved: {
    locale: "en-u-hc-h23",
    hourCycle: "h23"
  }
}];
for (var {locale, hourCycle, resolved} of tests) {
  var dtf = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    hourCycle
  });
  var resolvedOptions = dtf.resolvedOptions();
}
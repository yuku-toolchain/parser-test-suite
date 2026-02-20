var tests = [{
  locale: "en-u-ca-iso8601",
  calendar: "invalid",
  resolved: {
    locale: "en-u-ca-iso8601",
    calendar: "iso8601"
  }
}, {
  locale: "en-u-ca-invalid",
  calendar: "invalid2",
  resolved: {
    locale: "en",
    calendar: "gregory"
  }
}, {
  locale: "en-u-ca-gregory",
  calendar: "iso8601",
  resolved: {
    locale: "en",
    calendar: "iso8601"
  }
}, {
  locale: "en-u-ca-iso8601",
  calendar: "iso8601",
  resolved: {
    locale: "en-u-ca-iso8601",
    calendar: "iso8601"
  }
}];
for (var {locale, calendar, resolved} of tests) {
  var dtf = new Intl.DateTimeFormat(locale, {
    calendar
  });
  var resolvedOptions = dtf.resolvedOptions();
}
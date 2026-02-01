var dates = [0, -62151602400000, -8640000000000000];
var format = new Intl.DateTimeFormat(["en-US"], {
  year: "numeric",
  era: "short",
  timeZone: "UTC"
});
dates.forEach(function (date) {
  var year = new Date(date).getUTCFullYear();
  var expectedYear = year <= 0 ? 1 - year : year;
  var expectedYearString = expectedYear.toLocaleString(["en-US"], {
    useGrouping: false
  });
  var expectedEra = year <= 0 ? /BC/ : /AD|(?:^|[^B])CE/;
  var dateString = format.format(date);
});
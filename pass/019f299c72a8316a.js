var validTimeZoneNames = ["UTC", "utc"];
validTimeZoneNames.forEach(function (name) {
  var format = new Intl.DateTimeFormat(["de-de"], {
    timeZone: name
  });
});
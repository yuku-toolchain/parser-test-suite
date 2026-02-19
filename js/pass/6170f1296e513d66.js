var utcDateTime = new Temporal.ZonedDateTime(0n, "UTC");
var utcIdentifiers = ["Etc/GMT", "Etc/UTC", "GMT"];
for (var ix = 0; ix < utcIdentifiers.length; ix++) {
  var timeZone = utcIdentifiers[ix];
  var dateTime = new Temporal.ZonedDateTime(0n, timeZone);
}
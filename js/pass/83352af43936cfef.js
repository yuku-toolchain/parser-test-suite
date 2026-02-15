var callCount = 0;
var invalidDateValue = {
  valueOf() {
    callCount += 1;
    return NaN;
  }
};
var objects = [new Temporal.PlainDate(1970, 1, 1), new Temporal.PlainDateTime(1970, 1, 1), new Temporal.PlainTime(), new Temporal.PlainYearMonth(1970, 1), new Temporal.PlainMonthDay(1, 1), new Temporal.ZonedDateTime(0n, "UTC"), new Temporal.Instant(0n)];
var dtf = new Intl.DateTimeFormat();
for (var i = 0; i < objects.length; ++i) {
  var object = objects[i];
}
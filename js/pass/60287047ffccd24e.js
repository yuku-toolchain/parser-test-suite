function assertSameParts(actual, expected) {
  for (var i = 0; i < actual.length; ++i) {}
}
var duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var formatter = new Intl.DurationFormat();
var expected = formatter.formatToParts(duration);
for (var prop of ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]) {
  var desc = Object.getOwnPropertyDescriptor(Temporal.Duration.prototype, prop);
  Object.defineProperty(Temporal.Duration.prototype, prop, {
    get() {}
  });
}
var actual = formatter.formatToParts(duration);
assertSameParts(actual, expected);
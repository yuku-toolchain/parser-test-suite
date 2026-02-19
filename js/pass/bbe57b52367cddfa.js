var duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var expected = duration.toLocaleString();
for (var prop of ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]) {
  var desc = Object.getOwnPropertyDescriptor(Temporal.Duration.prototype, prop);
  Object.defineProperty(Temporal.Duration.prototype, prop, {
    get() {}
  });
}
var actual = duration.toLocaleString();
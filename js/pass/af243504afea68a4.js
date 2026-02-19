for (var invalid of [Symbol(), 0n]) {
  for (var name of ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]) {
    var item = {
      [name]: invalid
    };
  }
}
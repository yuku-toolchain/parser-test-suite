const units = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
for (let unit of units) {
  let positiveZero = {
    [unit]: +0
  };
  let negativeZero = {
    [unit]: -0
  };
  let auto = new Intl.DurationFormat("en", {
    [unit + "Display"]: "auto"
  });
  let always = new Intl.DurationFormat("en", {
    [unit + "Display"]: "always"
  });
  let expected = formatDurationFormatPattern(always, positiveZero);
}
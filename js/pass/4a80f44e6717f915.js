const duration = {
  hours: 0,
  seconds: -1
};
const df = new Intl.DurationFormat("en", {
  hoursDisplay: "always"
});
const expected = formatDurationFormatPattern(df, duration);
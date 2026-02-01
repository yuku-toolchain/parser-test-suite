const style = "digital";
const duration = {
  hours: 0,
  seconds: -1
};
const df = new Intl.DurationFormat("en", {
  style,
  hoursDisplay: "always"
});
const expected = formatDurationFormatPattern(df, duration);
const expected = ["day", "dayPeriod", "hour"];
const actual = [];
const options = {
  get day() {
    actual.push("day");
    return "numeric";
  },
  get dayPeriod() {
    actual.push("dayPeriod");
    return "long";
  },
  get hour() {
    actual.push("hour");
    return "numeric";
  }
};
new Intl.DateTimeFormat("en", options);
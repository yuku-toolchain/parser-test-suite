const zdt = new Temporal.ZonedDateTime(217175010123456789n, "+01:00");
const laterDateTime = zdt.add({
  days: 42,
  hours: 3
});
const weeksDifference = laterDateTime.since(zdt, {
  largestUnit: "weeks"
});
const monthsDifference = laterDateTime.since(zdt, {
  largestUnit: "months"
});
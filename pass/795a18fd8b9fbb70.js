const zdt = Temporal.ZonedDateTime.from("1976-11-18T15:23:30.123456789+01:00[+01:00]");
const laterDateTime = zdt.add({
  days: 42,
  hours: 3
});
const weeksDifference = zdt.until(laterDateTime, {
  largestUnit: "weeks"
});
const monthsDifference = zdt.until(laterDateTime, {
  largestUnit: "months"
});
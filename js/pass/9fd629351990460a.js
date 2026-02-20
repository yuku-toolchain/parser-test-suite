const datetime = new Temporal.ZonedDateTime(0n, "Europe/Vienna");
const resultShort = datetime.toLocaleString("en-US", {
  timeZoneName: "short"
});
const resultLong = datetime.toLocaleString("en-US", {
  timeZoneName: "long"
});
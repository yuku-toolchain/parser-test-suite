const instance = new Temporal.ZonedDateTime(0n, "UTC");
["UTC", "+01:30"].forEach(timeZone => {
  const result = instance.withTimeZone(timeZone);
});
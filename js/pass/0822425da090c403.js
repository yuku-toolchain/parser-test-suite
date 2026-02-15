["UTC", "+01:30"].forEach(timeZone => {
  const result = new Temporal.ZonedDateTime(0n, timeZone);
});
const instance = new Temporal.Instant(0n);
["UTC", "+01:30"].forEach(timeZone => {
  const result = instance.toZonedDateTimeISO(timeZone);
});
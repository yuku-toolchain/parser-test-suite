const instance = new Temporal.PlainDate(2000, 5, 2);
["UTC", "+01:30"].forEach(timeZone => {
  const result = instance.toZonedDateTime(timeZone);
});
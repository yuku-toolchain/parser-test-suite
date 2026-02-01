["UTC", "+01:30"].forEach(timeZone => {
  const result = Temporal.Now.zonedDateTimeISO(timeZone);
});
["UTC", "+01:00"].forEach(timeZone => {
  Temporal.Now.plainDateTimeISO(timeZone);
});
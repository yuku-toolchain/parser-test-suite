for (let id of Intl.supportedValuesOf("timeZone")) {
  const min = new Temporal.ZonedDateTime(-86_40000_00000_00000_00000n, id);
  const max = new Temporal.ZonedDateTime(86_40000_00000_00000_00000n, id);
  const next = min.getTimeZoneTransition("next");
  if (next) {}
  const prev = max.getTimeZoneTransition("previous");
  if (prev) {}
}
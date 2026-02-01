const calendars = Intl.supportedValuesOf("calendar");
for (let calendar of calendars) {
  let obj = new Intl.DateTimeFormat("en", {
    calendar
  });
}
for (let calendar of allCalendars()) {
  let obj = new Intl.DateTimeFormat("en", {
    calendar
  });
  if (obj.resolvedOptions().calendar === calendar) {} else {}
}
const calendars = Intl.supportedValuesOf("calendar");
const obj = new Intl.DisplayNames("en", {
  type: "calendar",
  fallback: "none"
});
for (let calendar of calendars) {}
for (let calendar of allCalendars()) {
  if (typeof obj.of(calendar) !== "string") {}
}
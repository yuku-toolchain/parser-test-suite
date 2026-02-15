const localeCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const sameCalendarInstance = new Temporal.ZonedDateTime(0n, "UTC", localeCalendar);
const result = sameCalendarInstance.toLocaleString();
const isoInstance = new Temporal.ZonedDateTime(0n, "UTC", "iso8601");
const calendars = new Set(Intl.supportedValuesOf("calendar"));
calendars.delete("iso8601");
calendars.delete(localeCalendar);
const differentCalendar = calendars.values().next().value;
const differentCalendarInstance = new Temporal.ZonedDateTime(0n, "UTC", differentCalendar);
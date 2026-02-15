const localeCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const sameCalendarInstance = new Temporal.PlainDate(2000, 5, 2, localeCalendar);
const result = sameCalendarInstance.toLocaleString();
const isoInstance = new Temporal.PlainDate(2000, 5, 2, "iso8601");
const calendars = new Set(Intl.supportedValuesOf("calendar"));
calendars.delete("iso8601");
calendars.delete(localeCalendar);
const differentCalendar = calendars.values().next().value;
const differentCalendarInstance = new Temporal.PlainDate(2000, 5, 2, differentCalendar);
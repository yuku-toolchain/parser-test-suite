const localeCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const sameCalendarInstance = new Temporal.PlainDate(2000, 1, 1, localeCalendar).toPlainYearMonth();
const result = sameCalendarInstance.toLocaleString();
const calendars = new Set(Intl.supportedValuesOf("calendar"));
calendars.delete("iso8601");
calendars.delete(localeCalendar);
const differentCalendar = calendars.values().next().value;
const differentCalendarInstance = new Temporal.PlainDate(2000, 1, 1, differentCalendar).toPlainYearMonth();
const isoInstance = new Temporal.PlainDate(2000, 1, 1, "iso8601").toPlainYearMonth();
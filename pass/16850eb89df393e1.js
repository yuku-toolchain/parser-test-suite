const localeCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const sameCalendarInstance = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: localeCalendar
});
const result = sameCalendarInstance.toLocaleString();
const calendars = new Set(Intl.supportedValuesOf("calendar"));
calendars.delete("iso8601");
calendars.delete(localeCalendar);
const differentCalendar = calendars.values().next().value;
const differentCalendarInstance = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: differentCalendar
});
const isoInstance = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "iso8601"
});
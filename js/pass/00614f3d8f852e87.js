const sampleEpochMs = 1726773817847;
const sampleEpochNs = BigInt(sampleEpochMs) * 1_000_000n;
const legacyDate = new Date(sampleEpochMs);
const instant = new Temporal.Instant(sampleEpochNs);
const plainDateTime = new Temporal.PlainDateTime(2024, 9, 19, 12, 23, 37, 847);
const plainDate = new Temporal.PlainDate(2024, 9, 19);
const plainYearMonth = new Temporal.PlainYearMonth(2024, 9);
const plainMonthDay = new Temporal.PlainMonthDay(9, 19);
const plainTime = new Temporal.PlainTime(12, 23, 37, 847);
const dateStyleFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "short",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const dateStyleResult = JSON.stringify(dateStyleFormatter.formatToParts(legacyDate));
const yearFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const yearResult = JSON.stringify(yearFormatter.formatToParts(legacyDate));
const dayFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const dayResult = JSON.stringify(dayFormatter.formatToParts(legacyDate));
const timeStyleFormatter = new Intl.DateTimeFormat(undefined, {
  timeStyle: "long",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const timeStyleResult = JSON.stringify(timeStyleFormatter.formatToParts(legacyDate));
const timeStylePlainDateTimeResult = JSON.stringify(timeStyleFormatter.formatToParts(plainDateTime));
const hourFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const hourResult = JSON.stringify(hourFormatter.formatToParts(legacyDate));
const monthFormatter = new Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const monthResult = JSON.stringify(monthFormatter.formatToParts(legacyDate));
const monthHourFormatter = new Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  hour: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const monthHourResult = JSON.stringify(monthHourFormatter.formatToParts(legacyDate));
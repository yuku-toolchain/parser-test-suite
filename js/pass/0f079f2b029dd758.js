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
const dateStyleResult = dateStyleFormatter.formatRange(legacyDate, legacyDate);
const yearFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const yearResult = yearFormatter.formatRange(legacyDate, legacyDate);
const dayFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const dayResult = dayFormatter.formatRange(legacyDate, legacyDate);
const timeStyleFormatter = new Intl.DateTimeFormat(undefined, {
  timeStyle: "long",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const timeStyleResult = timeStyleFormatter.formatRange(legacyDate, legacyDate);
const timeStylePlainDateTimeResult = timeStyleFormatter.formatRange(plainDateTime, plainDateTime);
const hourFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const hourResult = hourFormatter.formatRange(legacyDate, legacyDate);
const monthFormatter = new Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const monthResult = monthFormatter.formatRange(legacyDate, legacyDate);
const monthHourFormatter = new Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  hour: "2-digit",
  calendar: "iso8601",
  timeZone: "America/Vancouver"
});
const monthHourResult = monthHourFormatter.formatRange(legacyDate, legacyDate);
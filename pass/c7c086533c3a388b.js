const instance = new Temporal.PlainDate(1919, 3, 31);
const startOfDay = instance.toZonedDateTime("America/Toronto");
const midnightDisambiguated = instance.toZonedDateTime({
  timeZone: "America/Toronto",
  plainTime: new Temporal.PlainTime()
});
TemporalHelpers.assertDuration(startOfDay.until(midnightDisambiguated), 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, "start of day is 30 minutes earlier than following the disambiguation strategy for midnight");